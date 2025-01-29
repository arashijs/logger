import { DefaultConsoleFormat } from './DefaultConsoleFormat';
import { ILogObject } from './ILogObject';

/**
 * A formatter for file output.
 * It is the same as the default console format, but with a new line appended.
 */
export class DefaultFileFormat extends DefaultConsoleFormat {
    public override format(lo: ILogObject): string {
        return super.format(lo) + '\n';
    }
}
