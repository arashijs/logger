
import {Writable, WritableOptions} from 'stream';
import {ILogObject} from './ILogObject';
import * as Path from 'path';
import * as Filesystem from 'fs';
import { ILogFormatter } from './ILogFormatter';
import { DefaultFileFormat } from './DefaultFileFormat';

/**
 * @since 4.1.0
 */
export interface ILogFileStreamConfig {
    path: string;
    formatter: ILogFormatter;
}

/**
 * @since 4.1.0
 */
export class LogFileStream extends Writable {

    private $stream: Filesystem.WriteStream;
    private $formatter: ILogFormatter;

    public static async create(config: ILogFileStreamConfig, streamOpts?: WritableOptions): Promise<LogFileStream> {
        return new LogFileStream(
            Filesystem.createWriteStream(Path.resolve(config.path)),
            config.formatter || new DefaultFileFormat(),
            streamOpts || {}
        );
    }

    private constructor(
        stream: Filesystem.WriteStream,
        formatter?: ILogFormatter,
        streamOpts?: WritableOptions
    ) {
        super({
            ...streamOpts,
            highWaterMark: 256,
            objectMode: true
        });

        this.$stream = stream;
        this.$formatter = formatter;

    }

    private $formatLogObject(lo: ILogObject): string {
        return this.$formatter.format(lo);
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        this.$stream.write(this.$formatLogObject(chunk), callback);
    }
}
