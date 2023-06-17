
import {Writable, WritableOptions} from 'stream';
import {Worker} from 'worker_threads';
import {ILogObject} from './ILogObject';
import {
    // CloudWatchLogsClient,
    CloudWatchLogsClientConfig
    // PutLogEventsCommand,
    // PutLogEventsCommandOutput
} from '@aws-sdk/client-cloudwatch-logs';
import EventEmitter = require('events');

export interface ICWStreamConfig {
    group: string;
    stream: string;
}

export class CloudWatchStream extends Writable {
    // private $client: CloudWatchLogsClient;
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
        // this.$client = new CloudWatchLogsClient(awsConfig);
    }

    private $initThread(awsConfig: CloudWatchLogsClientConfig): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.$threadChannel = new MessageChannel();

            let isTS: boolean = /\.ts$/.test(__filename);
            this.$thread = new Worker(`./CloudWatchThread.${isTS ? 'ts' : 'js'}`, {
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
        // let json: string;
        // try {
        //     json = JSON.stringify(chunk);
        // }
        // catch (ex) {
        //     callback(ex);
        //     return;
        // }
        
        // let comm: PutLogEventsCommand
        // try {
        //     comm = new PutLogEventsCommand({
        //         logGroupName: this.$streamConfig.group,
        //         logStreamName: this.$streamConfig.stream,
        //         logEvents: [
        //             {
        //                 timestamp: chunk.timestamp,
        //                 message: json
        //             }
        //         ]
        //     });
        // }
        // catch (ex) {
        //     callback(ex);
        //     return;
        // }

        // try {
        //     this.$client.send(comm).then((resp: PutLogEventsCommandOutput) => {
        //         callback();
        //     }).catch((error) => {
        //         callback(error);
        //     });
        // }
        // catch (ex) {
        //     callback(ex);
        //     return;
        // }
    }
}
