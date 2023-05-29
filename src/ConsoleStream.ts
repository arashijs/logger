
import {Writable, WritableOptions} from 'stream';
import {ILogObject} from './ILogObject';

export class ConsoleStream extends Writable {
    public constructor(opts?: WritableOptions) {
        super({
            ...opts,
            highWaterMark: 256,
            objectMode: true
        });
    }

    private $formatMessage(lo: ILogObject): string {
        return `[${lo.level}][${lo.service}][${lo.component}] ${lo.message}`;
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        let msg: string = this.$formatMessage(chunk);
        console.log(msg);
        callback();
    }
}
