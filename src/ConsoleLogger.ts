
import {
    Logger,
    ILogMetadata
} from './Logger';
import {LogLevel} from '@arashi/interfaces';

export class ConsoleLogger extends Logger {
    protected _log(level: LogLevel, message: string, metadata: ILogMetadata): void {
        let msg: string = this.$formatMessage(level, message, metadata);
        console.log(msg);
    }

    private $formatMessage(level: LogLevel, message: string, metadata: ILogMetadata): string {
        return `[${level}][${metadata.service}][${metadata.component}] ${message}`;
    }
}
