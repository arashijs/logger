
import {ILogObject} from './ILogObject';
import {EventEmitter} from 'events';
import {
    CloudWatchLogsClient,
    PutLogEventsCommand,
    PutLogEventsCommandOutput
} from '@aws-sdk/client-cloudwatch-logs';
import {workerData} from 'worker_threads';
import { ICWStreamConfig } from './CloudWatchStream';

let streamConfig: ICWStreamConfig = workerData.streamConfig;

let client: CloudWatchLogsClient = new CloudWatchLogsClient(workerData.awsConfig);

let channel: MessageChannel = new MessageChannel();

// NodeJS version of MessagePort is indeed an EventEmitter...
(<EventEmitter><unknown>channel.port1).on('message', (chunk: ILogObject) => {
    let json: string;
    try {
        json = JSON.stringify(chunk);
    }
    catch (ex) {
        console.error('CloudWatchThread', ex);
        return;
    }
    
    let comm: PutLogEventsCommand
    try {
        comm = new PutLogEventsCommand({
            logGroupName: streamConfig.group,
            logStreamName: streamConfig.stream,
            logEvents: [
                {
                    timestamp: chunk.timestamp,
                    message: json
                }
            ]
        });
    }
    catch (ex) {
        console.error('CloudWatchThread', ex);
        return;
    }

    try {
        client.send(comm).then((resp: PutLogEventsCommandOutput) => {
            // yay
        }).catch((error) => {
            console.error('CloudWatchThread', error);
        });
    }
    catch (ex) {
        console.error('CloudWatchThread', ex);
        return;
    }
});

workerData.port.postMessage(channel.port2, [ channel.port2 ]);
