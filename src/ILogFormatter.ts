import { ILogObject } from './ILogObject';

export interface ILogFormatter {
    format(lo: ILogObject): string;
}
