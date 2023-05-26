
import {Writable, WritableOptions} from 'stream';
import {ILogObject} from './ILogObject';
import {LogLevel} from '@arashi/interfaces';
import {ILogMetadata} from './ILogMetadata';

export class ConsoleStream extends Writable {
    public constructor(opts?: WritableOptions) {
        super({
            ...opts,
            highWaterMark: 1,
            objectMode: true
        });
    }

    private $formatMessage(level: LogLevel, message: string, metadata: ILogMetadata): string {
        return `[${level}][${metadata.service}][${metadata.component}] ${message}`;
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        let msg: string = this.$formatMessage(chunk.level, chunk.message, chunk.metadata);
        console.log(msg);
        callback();
    }
}
