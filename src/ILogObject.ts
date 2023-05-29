import { LogLevel } from '@arashi/interfaces';

export interface ILogObject {
    level: LogLevel;
    metadata: Record<any, any>;
    service: string;
    component: string;
    message: string;
    timestamp: number;
}
