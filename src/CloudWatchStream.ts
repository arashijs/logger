
import {Writable, WritableOptions} from 'stream';
import {Worker} from 'worker_threads';
import {ILogObject} from './ILogObject';
import {
    CloudWatchLogsClientConfig
} from '@aws-sdk/client-cloudwatch-logs';
import EventEmitter = require('events');
import * as Path from 'path';

export interface ICWStreamConfig {
    group: string;
    stream: string;
}

export class CloudWatchStream extends Writable {
    private $streamConfig: ICWStreamConfig;
    private $thread: Worker;
    private $threadChannel: MessageChannel;
    private $threadPort: MessagePort;

    public static async  create(awsConfig: CloudWatchLogsClientConfig, streamConfig: ICWStreamConfig, opts?: WritableOptions): Promise<CloudWatchStream> {
        let stream: CloudWatchStream = new CloudWatchStream(streamConfig, opts);
        await stream.$initThread(awsConfig);
        return stream;
    }

    private constructor(streamConfig: ICWStreamConfig, opts?: WritableOptions) {
        super({
            ...opts,
            highWaterMark: 256,
            objectMode: true
        });

        this.$streamConfig = streamConfig;
    }

    private $initThread(awsConfig: CloudWatchLogsClientConfig): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.$threadChannel = new MessageChannel();

            let isTS: boolean = /\.ts$/.test(__filename);
            this.$thread = new Worker(Path.resolve(__dirname, `./CloudWatchThread.${isTS ? 'ts' : 'js'}`), {
                workerData: {
                    awsConfig: awsConfig,
                    streamConfig: this.$streamConfig,
                    port: this.$threadChannel.port2
                },
                // This was tested and works, and is recommended by NodeJS docs,
                // in fact if you don't transfer the port, using a port in workerData will produce
                // an error
                transferList: [ <any> this.$threadChannel.port2 ]
            });

            // We must wait for the thread to initiate and give us it's message port
            // NodeJS version of MessagePort is indeed an EventEmitter...
            (<EventEmitter><unknown> this.$threadChannel.port1).once('message', (msg: unknown) => {
                if (!(msg instanceof MessagePort)) {
                    reject(new Error('Expected MessagePort'));
                    return;
                }

                this.$threadPort = msg;
                resolve();
            });
        });
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        this.$threadPort.postMessage(chunk);
        callback();
    }
}
