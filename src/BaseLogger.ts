/*
Copyright 2021 Norman Breau

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as utils from 'util';
import {
    LogLevel,
    LogEvent,
    ILogger
} from '@arashi/interfaces';
import { Readable } from 'stream';
import { ILogObject } from './ILogObject';

const ACCEPTABLE_LEVELS: Record<LogLevel, LogLevel[]> = {
    [LogLevel.ERROR]: [ LogLevel.ERROR ],
    [LogLevel.WARN]: [
        LogLevel.ERROR,
        LogLevel.WARN
    ],
    [LogLevel.INFO]: [
        LogLevel.ERROR,
        LogLevel.WARN,
        LogLevel.INFO
    ],
    [LogLevel.HTTP]: [
        LogLevel.ERROR,
        LogLevel.WARN,
        LogLevel.INFO,
        LogLevel.HTTP
    ],
    [LogLevel.VERBOSE]: [
        LogLevel.ERROR,
        LogLevel.WARN,
        LogLevel.INFO,
        LogLevel.HTTP,
        LogLevel.VERBOSE
    ],
    [LogLevel.DEBUG]: [
        LogLevel.ERROR,
        LogLevel.WARN,
        LogLevel.INFO,
        LogLevel.HTTP,
        LogLevel.VERBOSE,
        LogLevel.DEBUG
    ],
    [LogLevel.SILLY]: [
        LogLevel.ERROR,
        LogLevel.WARN,
        LogLevel.INFO,
        LogLevel.HTTP,
        LogLevel.VERBOSE,
        LogLevel.DEBUG,
        LogLevel.SILLY
    ]
};


export class BaseLogger extends Readable implements ILogger {
    private $filters: RegExp[];
    private $logLevel: LogLevel;
    private $serviceName: string;
    private $shouldWaitForRead: boolean;
    private $buffer: ILogObject[] = [];

    public constructor(serviceName: string, logLevel: LogLevel) {
        super({
            objectMode: true,
            highWaterMark: 256
        });

        this.$filters = this._getDefaultLogFilters();
        this.$serviceName = serviceName;
        this.$logLevel = logLevel;
        this.$shouldWaitForRead = true;
        this.$buffer = [];
    }

    public setLogLevel(level: LogLevel): void {
        this.$logLevel = level;
    }

    public getLogLevel(): LogLevel {
        return this.$logLevel;
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

    public setFilters(filters: RegExp[]): void {
        if (filters) {
            this.$filters  = filters.slice();
        }
        else {
            this.$filters = [];
        }
    }

    public getFilters(): RegExp[] {
        return this.$filters.slice();
    }

    protected _getDefaultLogFilters(): RegExp[] {
        return [ /TokenExpiredError/g ];
    }

    protected _formatDate(now: Date): string {
        return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

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

    public override _read(size: number): void {
       /// do nothing, we will push data as they become available
        let shouldContinue: boolean = true;
        while (this.$buffer.length > 0) {
            let lo: ILogObject = this.$buffer.shift();
            shouldContinue = this.push(lo);
            if (!shouldContinue) {
                break;
            }
        }

        this.$shouldWaitForRead = !shouldContinue;
    }

    protected _log(lo: ILogObject): boolean {
        let shouldEmit: boolean = false;

        if (this._shouldLog(lo)) {
            if (this.$shouldWaitForRead) {
                this.$buffer.push(lo)
                shouldEmit = true;
            }
            else {
                this.push(lo);
                shouldEmit = true;
            }
        }

        return shouldEmit;
    }

    protected _shouldLog(lo: ILogObject): boolean {
        let allowedLevels: LogLevel[] = ACCEPTABLE_LEVELS[this.$logLevel];
        return allowedLevels.indexOf(lo.level) > -1;
    }

    public log(level: LogLevel, component: string, message: any, metadata?: Record<any, any>): void {
        if (!metadata) {
            metadata = {};
        }

        if (this._shouldFilter(message)) {
            let msg: string = this.$parseMessage(message);

            let lo: ILogObject = {
                service: this.$serviceName,
                component: component,
                message: msg,
                level: level,
                metadata: metadata,
                timestamp: new Date().getTime()
            }

            this._log(lo);

            this.emit(LogEvent.LOG, lo);
        }
    }

    public logObject(lo: ILogObject): void {
        this._log(lo);
        this.emit(LogEvent.LOG, lo);
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

    public _destroy(): void {
        this.push(null);
    }
}
