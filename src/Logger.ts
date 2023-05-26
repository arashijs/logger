
import {BaseLogger} from './BaseLogger';
import {ConsoleStream} from './ConsoleStream';
import {LogLevel} from '@arashi/interfaces';

export class Logger extends BaseLogger {
    private $cstream: ConsoleStream;

    public constructor(serviceName: string = 'Generic', logLevel: LogLevel = LogLevel.INFO) {
        super(serviceName, logLevel);
        this.$cstream = new ConsoleStream();
        this.pipe(this.$cstream);
    }
}
