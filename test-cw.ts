
import {
    Logger,
    ConsoleStream,
    CloudWatchStream
} from './src/api';
import * as FS from 'fs';

let creds: Record<any, any> = JSON.parse(FS.readFileSync('./testCreds.json', { encoding: 'utf-8'}));

let logger: Logger = new Logger();
logger.pipe(new ConsoleStream());

let cw: CloudWatchStream = new CloudWatchStream({
    ...creds
}, {
    group: 'production-001',
    stream: 'test-stream'
});

logger.pipe(cw);

logger.info('COMP', "test message");

logger.on('erorr', (error) => {
    console.error('ERROR', error);
});

setTimeout(() => {
    logger.error('COMP', "test error??");
}, 1000);

