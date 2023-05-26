
import {Writable, WritableOptions} from 'stream';
import {ILogObject} from './ILogObject';
import {
    CloudWatchLogsClient,
    CloudWatchLogsClientConfig,
    PutLogEventsCommand,
    PutLogEventsCommandOutput
} from '@aws-sdk/client-cloudwatch-logs';

export interface ICWStreamConfig {
    group: string;
    stream: string;
}

export class CloudWatchStream extends Writable {
    private $client: CloudWatchLogsClient;
    private $streamConfig: ICWStreamConfig;

    public constructor(awsConfig: CloudWatchLogsClientConfig, streamConfig: ICWStreamConfig, opts?: WritableOptions) {
        super({
            ...opts,
            highWaterMark: 1,
            objectMode: true
        });

        this.$streamConfig = streamConfig;
        this.$client = new CloudWatchLogsClient(awsConfig);
    }

    public override _write(chunk: ILogObject, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        let json: string;
        try {
            json = JSON.stringify(chunk);
        }
        catch (ex) {
            callback(ex);
            return;
        }
        
        let comm: PutLogEventsCommand
        try {
            comm = new PutLogEventsCommand({
                logGroupName: this.$streamConfig.group,
                logStreamName: this.$streamConfig.stream,
                logEvents: [
                    {
                        timestamp: new Date().getTime(),
                        message: json
                    }
                ]
            });
        }
        catch (ex) {
            callback(ex);
            return;
        }

        try {
            this.$client.send(comm).then((resp: PutLogEventsCommandOutput) => {
                callback();
            }).catch((error) => {
                callback(error);
            });
        }
        catch (ex) {
            callback(ex);
            return;
        }
    }
}
