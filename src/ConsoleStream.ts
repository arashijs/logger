
import {Writable, WritableOptions} from 'stream';
import {ILogObject} from './ILogObject';
import {DefaultConsoleFormat} from './DefaultConsoleFormat';
import { ILogFormatter } from './ILogFormatter';


export class ConsoleStream extends Writable {
    private $formatter: ILogFormatter;

    public constructor(opts?: WritableOptions) {
        super({
            ...opts,
            highWaterMark: 256,
            objectMode: true
        });

        this.$formatter = new DefaultConsoleFormat();
    }

    public setFormatter(formatter: ILogFormatter): void {
        this.$formatter = formatter;
    }

    private $formatMessage(lo: ILogObject): string {
        return this.$formatter.format(lo);
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        let msg: string = this.$formatMessage(chunk);
        console.log(msg);
        callback();
    }
}
