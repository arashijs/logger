import { LogLevel } from '@arashi/interfaces';
import { ILogFormatter } from './ILogFormatter';
import { ILogObject } from './ILogObject';
import * as luxon from 'luxon';

export class DefaultConsoleFormat implements ILogFormatter {
    public renderTime(ts: number): string {
        let date: luxon.DateTime = luxon.DateTime.fromMillis(ts);
        return `[${date.toFormat('yyyy/LL/dd - HH:mm:ss.SSS')}]`;
    }

    public renderLevel(level: LogLevel): string {
        return `[${level}]`;
    }

    public renderService(service: string): string {
        return `[${service}]`;
    }

    public renderComponent(component: string): string {
        return `[${component}]`;
    }

    public renderMessage(message: string): string {
        return message;
    }

    public format(lo: ILogObject): string {
        return `${this.renderTime(lo.timestamp)}${this.renderLevel(lo.level)}${this.renderService(lo.service)}${this.renderComponent(lo.component)} ${this.renderMessage(lo.message)}`;
    }
}
