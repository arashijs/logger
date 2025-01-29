
import { ConsoleStream } from '../src/ConsoleStream';
import { ILogObject } from '../src/ILogObject';
import {Logger} from '../src/Logger';
import {
    LogLevel,
    LogEvent
} from '@arashi/interfaces';

describe('Logger', () => {
    let logger: Logger = null;

    beforeEach(() => {
        logger = new Logger('test');
    });

    afterEach((done) => {
        let stream: ConsoleStream = logger.getConsoleStream();
        stream.once('finish', () => {
            done();
        });
        logger.destroy();
    });

    it('emits LogEvent.LOG events', (done) => {
        let spy: jest.Mock = jest.fn();
        logger.on(LogEvent.LOG, spy);

        logger.info('test', 'test message');

        setTimeout(() => {
            expect(spy).toHaveBeenCalledWith({
                component: 'test',
                level: 'info',
                message: 'test message',
                metadata: {},
                service: 'test',
                timestamp: expect.anything()
            });
            done();
        }, 1);
    });

    it('logObject should log the given object', () => {
        let lo: ILogObject = {
            service: 'test',
            component: 'comp',
            message: 'hi',
            level: LogLevel.INFO,
            metadata: {
                test: true
            },
            timestamp: new Date().getTime()
        };

        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.logObject(lo);
        expect(spy).toHaveBeenCalledWith(lo);
    });

    it('Sets default Log Level', () => {
        expect(logger.getLogLevel()).toBe(LogLevel.INFO);
    });

    it('has default filter', () => {
        let filters: RegExp[] = logger.getFilters();
        expect(filters[0].toString()).toBe('/TokenExpiredError/g');
    });

    it('Can add filter', () => {
        let addFilter = /test/;
        logger.addFilter(addFilter);
        let filters: RegExp[] = logger.getFilters();
        let filter: RegExp = filters[filters.length - 1];
        expect(filter).toBe(addFilter);
    });

    it('Can remove filter', () => {
        let addFilter = /test/;
        logger.addFilter(addFilter);
        let filters: RegExp[] = logger.getFilters();
        expect(filters.length).toBe(2);
        logger.removeFilter(addFilter);
        expect(logger.getFilters().length).toBe(1);
    });

    it('Can set filters', () => {
        logger.setFilters([
            /test1/,
            /test2/,
            /test3/
        ]);
        expect(logger.getFilters().length).toBe(3);

        logger.setFilters([]);
        expect(logger.getFilters().length).toBe(0);

        logger.setFilters(null);
        expect(logger.getFilters().length).toBe(0);
    });

    it('Can set log level', () => {
        logger.setLogLevel(LogLevel.SILLY);
        expect(logger.getLogLevel()).toBe(LogLevel.SILLY);
    });

    it('Can log silly messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.SILLY);
        logger.silly('component', 'This is a trace message');
        let expectation: ILogObject = {
            level: LogLevel.SILLY,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a trace message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('Can log debug messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.DEBUG);
        logger.debug('component', 'This is a debug message');
        let expectation: ILogObject = {
            level: LogLevel.DEBUG,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a debug message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('Can log verbose messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.VERBOSE);
        logger.verbose('component', 'This is a verbose message');
        let expectation: ILogObject = {
            level: LogLevel.VERBOSE,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a verbose message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('Can log info messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.INFO);
        logger.info('component', 'This is a info message');
        let expectation: ILogObject = {
            level: LogLevel.INFO,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a info message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('Can log warning messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.WARN);
        logger.warn('component', 'This is a warning message');
        let expectation: ILogObject = {
            level: LogLevel.WARN,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a warning message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    it('Can log error messages', () => {
        let spy: jest.SpyInstance = jest.spyOn((logger as any), '_log');
        logger.setLogLevel(LogLevel.ERROR);
        logger.error('component', 'This is a error message');
        let expectation: ILogObject = {
            level: LogLevel.ERROR,
            service: 'test',
            component: 'component',
            metadata: {},
            timestamp: expect.anything(),
            message: 'This is a error message'
        };
        expect(spy).toHaveBeenCalledWith(expectation);
    });

    describe('Deprecation', () => {
        class Deprecation {
            public deprecationWithNoAlternative(): void {
                logger.deprecate('component');
            }

            public deprecationWithAlternative(): void {
                logger.deprecate('component', 'properMethod');
            }
        }

        class DeprecatedClass {
            constructor() {
                logger.deprecate('component');
            }
        }

        class DeprecatedClassWithAlternative {
            constructor() {
                logger.deprecate('component', 'NonDeprecatedClass');
            }
        }

        let deprecation: Deprecation = new Deprecation();
        let methodMessageSpy: jest.SpyInstance = null;
        let alternativeMessageSpy: jest.SpyInstance = null;

        beforeEach(() => {
            jest.spyOn((logger as any), '_log');
            methodMessageSpy = jest.spyOn(logger as any, '$getDeprecatedMethodMessage');
            alternativeMessageSpy = jest.spyOn(logger as any, '$getDeprecatedAlternativeMessage');
        });

        it('deprecation with no alternative', () => {
            deprecation.deprecationWithNoAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.mock.results[methodMessageSpy.mock.results.length - 1].value).toBe('Method Deprecation.deprecationWithNoAlternative is deprecated.');
            expect(alternativeMessageSpy).not.toHaveBeenCalled();
        });

        it('deprecation with alternative', () => {
            deprecation.deprecationWithAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.mock.results[methodMessageSpy.mock.results.length - 1].value).toBe('Method Deprecation.deprecationWithAlternative is deprecated.');
            expect(alternativeMessageSpy).toHaveBeenCalledWith('properMethod');
            expect(alternativeMessageSpy.mock.results[alternativeMessageSpy.mock.results.length - 1].value).toBe('Use properMethod instead.');
        });

        it('deprecation class with no alternative', () => {
            new DeprecatedClass();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.mock.results[methodMessageSpy.mock.results.length - 1].value).toBe('Class DeprecatedClass is deprecated.');
            expect(alternativeMessageSpy).not.toHaveBeenCalled();
        });

        it('deprecation class with alternative', () => {
            new DeprecatedClassWithAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.mock.results[methodMessageSpy.mock.results.length - 1].value).toBe('Class DeprecatedClassWithAlternative is deprecated.');
            expect(alternativeMessageSpy).toHaveBeenCalledWith('NonDeprecatedClass');
            expect(alternativeMessageSpy.mock.results[alternativeMessageSpy.mock.results.length - 1].value).toBe('Use NonDeprecatedClass instead.');
        });
    });
});
