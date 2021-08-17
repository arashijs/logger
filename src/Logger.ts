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

import * as utils from 'util';
import * as Winston from 'winston';
import { LogLevel } from './LogLevel';
import {EventEmitter} from 'events';
import {LogEvent} from './LogEvent';
import * as Path from 'path';

const F_RESET: string = '\x1b[0m';
const F_DIM: string = '\x1b[2m';
const F_FG_BLUE: string = '\x1b[34m';
const F_FG_CYAN: string = '\x1b[36m';

export class Logger extends EventEmitter {
    private $filters: Array<RegExp>;
    private $logger: Winston.Logger;
    private $logLocation: string;
    private $serviceName: string;

    public constructor(serviceName: string = 'Generic', logLevel: LogLevel = LogLevel.INFO, logLocation?: string) {
        super();

        if (!logLocation) {
            logLocation = process.cwd();
        }

        this.$logLocation = Path.resolve(logLocation);
        
        this.$filters = this._getDefaultLogFilters();
        this.$serviceName = serviceName;

        let format: Winston.Logform.Format = Winston.format((info: Winston.Logform.TransformableInfo, opts?: any): Winston.Logform.TransformableInfo => {
            // Typescript for some reason doesn't allow using symbols as indexes.
            const MESSAGE: any = Symbol.for('message');
            info[MESSAGE] = `${F_DIM}${info.timestamp}${F_RESET} - [${F_FG_BLUE}${info.service}${F_RESET}][${F_FG_CYAN}${info.component}${F_RESET}]: ${info.level}: ${info.message}`
            return info;
        })();

        let consoleTransport: Winston.transports.ConsoleTransportInstance = new Winston.transports.Console({
            format: Winston.format.combine(
                Winston.format.colorize(),
                format,
                Winston.format.errors({ stack: true })
            )
        });

        consoleTransport.on('logged', (log: Winston.LogEntry) => {
            this.emit(LogEvent.LOG, log.message);
        });

        this.$logger = Winston.createLogger({
            level: logLevel,
            format: Winston.format.combine(
                Winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                Winston.format.errors({ stack: true })
            ),
            defaultMeta: {
                service: serviceName
            },
            transports: [
                consoleTransport,
                new Winston.transports.File({
                    filename: Path.resolve(this.$logLocation, `${serviceName}.json.log`),
                    level: logLevel,
                    format: Winston.format.combine(
                        Winston.format.json(),
                        Winston.format.errors({ stack: true }),
                        Winston.format((info: Winston.Logform.TransformableInfo, opts?: any): Winston.Logform.TransformableInfo => {
                            const MESSAGE: any = Symbol.for('message');
                            info[MESSAGE] = utils.inspect({
                                level: info.level,
                                message: info.message,
                                timestamp: info.timestamp,
                                service: info.service,
                                component: info.component,
                                meta: info.meta
                            }, {
                                depth: Infinity,
                                colors: false,
                                maxArrayLength: Infinity,
                                showProxy: true,
                                breakLength: Infinity
                            });
                            return info;
                        })()
                    )
                }),
                new Winston.transports.File({
                    filename: Path.resolve(this.$logLocation, `${serviceName}.log`),
                    level: logLevel,
                    format: Winston.format.combine(
                        Winston.format.simple(),
                        Winston.format.errors({ stack: true }),
                        format
                    )
                }),
                new Winston.transports.File({
                    filename: Path.resolve(this.$logLocation, `${serviceName}.errors.log`),
                    level: LogLevel.WARN,
                    format: Winston.format.combine(
                        Winston.format.simple(),
                        Winston.format.errors({ stack: true }),
                        format
                    )
                })
            ]
        });
    }

    public setLogLevel(level: LogLevel): void {
        this.$logger.level = level;
    }

    public getLogLevel(): LogLevel {
        return <LogLevel> this.$logger.level;
    }

    public addFilter(reg: RegExp): void {
        this.$filters.push(reg);
    }

    public removeFilter(reg: RegExp): void {
        let index: number = this.$filters.indexOf(reg);
        if (index > -1) {
            this.$filters.splice(index, 1);
        }
    }

    public setFilters(filters: Array<RegExp>): void {
        if (filters) {
            this.$filters  = filters.slice();
        }
        else {
            this.$filters = [];
        }
    }

    public getFilters(): Array<RegExp> {
        return this.$filters.slice();
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

        for (let i: number = 0; i < this.$filters.length; i++) {
            let filter: RegExp = this.$filters[i];
            if (filter.test(message)) {
                return false;
            }
        }

        return true;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    private $parseMessage(message: any): string {
        if (typeof message === 'string') {
            return message;
        }
        else {
            return utils.inspect(message, {
                depth: Infinity,
                compact: true
            });
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public log(level: LogLevel, component: string, message: any, metadata?: Record<any, any>): void {

        if (!metadata) {
            metadata = {};
        }

        if (this._shouldFilter(message)) {
            this.$logger.log(level, this.$parseMessage(message), {
                service: this.$serviceName,
                component: component,
                meta: metadata
            });
        }
    }

    /**
     * Alias for `silly`
     * @param message 
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public trace(component: string, message: any, metadata?: Record<any, any>): void {
        this.silly(component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public silly(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.SILLY, component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public debug(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.DEBUG, component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public verbose(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.VERBOSE, component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public info(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.INFO, component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public warn(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.WARN, component, message, metadata);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public error(component: string, message: any, metadata?: Record<any, any>): void {
        this.log(LogLevel.ERROR, component, message, metadata);
    }

    public deprecate(component: string, alternative?: string, methodOverride?: string): void {
        let e: Error = new Error();
        let args: any = [];
        
        if (!methodOverride) {
            args.push(this.$getDeprecatedMethodMessage(e));
        }
        else {
            args.push(methodOverride);
        }

        if (alternative) {
            args.push(this.$getDeprecatedAlternativeMessage(alternative));
        }
        
        args.push('\n');
        args.push(e.stack);
        this.log(LogLevel.WARN, component, args.join('\n'));
    }

    public deprecateParameterType(component: string, argumentLocation: number, deprecatedType: string, alternative?: string): void {
        let e: Error = new Error();
        let args: any = [];

        args.push(this.$getDeprecatedParameterMethodMessage(e, argumentLocation, deprecatedType));

        if (alternative) {
            args.push(this.$getDeprecatedParameterAlternativeMessage(alternative,  argumentLocation));
        }
        
        args.push('\n');
        args.push(e.stack);
        this.log(LogLevel.WARN, component, args.join('\n'));
    }
    
    private $getDeprecatedMethodMessage(e: Error): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} is deprecated.`
    }

    private $getDeprecatedAlternativeMessage(alternative: string): string {
        return `Use ${alternative} instead.`;
    }

    private $getDeprecatedParameterMethodMessage(e: Error, argumentLocation: number, parameter: string): string {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj: string = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} ${parameter} at parameter ${argumentLocation} is deprecated.`
    }

    private $getDeprecatedParameterAlternativeMessage(alternative: string, argumentLocation: number): string {
        return `Use ${alternative} at parameter ${argumentLocation} instead.`;
    }
}
