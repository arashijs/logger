import { LogLevel } from '@arashi/interfaces';
import { ILogMetadata } from './ILogMetadata';

export interface ILogObject {
    level: LogLevel;
    metadata: ILogMetadata;
    message: string;
}
