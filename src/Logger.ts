// Copyright (C) 2020  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// import {LogEvent} from './LogEvent';
// import {ILogEvent} from './ILogEvent';
// import * as utils from 'util';
// import {getInstance} from './instance';
// import { IConfig } from './IConfig';
// import { Application } from './Application';
// import {Writable} from 'stream';
import * as Winston from 'winston';
import { LogLevel } from './LogLevel';
import {EventEmitter} from 'events';
import {LogEvent} from './LogEvent';

export class Logger extends EventEmitter {
    private _filters: Array<RegExp>;
    private _logger: Winston.Logger;

    public constructor(name: string = '', logLevel: LogLevel = LogLevel.INFO) {
        super();
        
        this._logger = Winston.createLogger({
            level: logLevel,
            format: Winston.format.combine(
                Winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                Winston.format.errors({ stack: true }),
                Winston.format.splat(),
                Winston.format.json()
            ),
            defaultMeta: { service: name },
            transports: [
                new Winston.transports.Console({
                    format: Winston.format.combine(
                        Winston.format.colorize(),
                        Winston.format.simple()
                    )
                })
            ]
        });

        this._logger.stream({
            start: -1
        }).on('log', (log: any) => {
            this.emit(LogEvent.LOG, log);
        });
    }

    public addFilter(reg: RegExp): void {
        this._filters.push(reg);
    }

    public removeFilter(reg: RegExp): void {
        let index: number = this._filters.indexOf(reg);
        if (index > -1) {
            this._filters.splice(index, 1);
        }
    }

    public setFilters(filters: Array<RegExp>): void {
        if (filters) {
            this._filters  = filters.slice();
        }
        else {
            this._filters = [];
        }
    }

    public getFilters(): Array<RegExp> {
        return this._filters.slice();
    }

    protected _getDefaultLogFilters(): Array<RegExp> {
        return [ /TokenExpiredError/g ];
    }

    protected _formatDate(now: Date): string {
        return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _shouldFilter(message: any): boolean {
        if (!message) {
            message = '';
        }
        else {
            message = message.toString();
        }

        for (let i: number = 0; i < this._filters.length; i++) {
            let filter: RegExp = this._filters[i];
            if (filter.test(message)) {
                return false;
            }
        }

        return true;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public log(level: LogLevel, message: any): void {
        if (this._shouldFilter(message)) {
            this._logger.log(level, message);
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public trace(message: any): void {
        this.log(LogLevel.SILLY, message);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public debug(message: any): void {
        this.log(LogLevel.DEBUG, message);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public info(message: any): void {
        this.log(LogLevel.INFO, message);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public warn(message: any): void {
        this.log(LogLevel.WARN, message);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public error(message: any): void {
        this.log(LogLevel.ERROR, message);
    }

    public deprecate(alternative?: string, methodOverride?: string): void {
        let e: Error = new Error();
        let args: any = [];
        
        if (!methodOverride) {
            args.push(this._getDeprecatedMethodMessage(e));
        }
        else {
            args.push(methodOverride);
        }

        if (alternative) {
            args.push(this._getDeprecatedAlternativeMessage(alternative));
        }
        
        args.push('\n\n');
        args.push(e.stack);
        this.log(args, LogLevel.WARN);
    }

    public deprecateParameterType(argumentLocation: number, deprecatedType: string, alternative?: string): void {
        let e: Error = new Error();
        let args: any = [];

        args.push(this._getDeprecatedParameterMethodMessage(e, argumentLocation, deprecatedType));

        if (alternative) {
            args.push(this._getDeprecatedParameterAlternativeMessage(alternative,  argumentLocation));
        }
        
        args.push('\n\n');
        args.push(e.stack);
        this.log(args, LogLevel.WARN);
    }
    
    private _getDeprecatedMethodMessage(e: Error): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} is deprecated.`
    }

    private _getDeprecatedAlternativeMessage(alternative: string): string {
        return `Use ${alternative} instead.`;
    }

    private _getDeprecatedParameterMethodMessage(e: Error, argumentLocation: number, parameter: string): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} ${parameter} at parameter ${argumentLocation} is deprecated.`
    }

    private _getDeprecatedParameterAlternativeMessage(alternative: string, argumentLocation: number): string {
        return `Use ${alternative} at parameter ${argumentLocation} instead.`;
    }
}
