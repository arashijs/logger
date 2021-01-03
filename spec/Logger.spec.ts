
import {Logger} from '../src/Logger';
import { LogLevel } from '../src/LogLevel';
// import {MockLogger} from './support/MockLogger';

describe('Logger', () => {
    let logger: Logger = null;

    beforeEach(() => {
        logger = new Logger('test');
    });

    it('Sets default Log Level', () => {
        expect(logger.getLogLevel()).toBe(LogLevel.INFO);
    });

    it('has default filter', () => {
        let filters: Array<RegExp> = logger.getFilters();
        expect(filters[0].toString()).toBe('/TokenExpiredError/g');
    });

    it('Can add filter', () => {
        let addFilter = /test/;
        logger.addFilter(addFilter);
        let filters: Array<RegExp> = logger.getFilters();
        let filter: RegExp = filters[filters.length - 1];
        expect(filter).toBe(addFilter);
    });

    it('Can remove filter', () => {
        let addFilter = /test/;
        logger.addFilter(addFilter);
        let filters: Array<RegExp> = logger.getFilters();
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
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.SILLY);
        logger.silly('This is a trace message');
        expect(spy).toHaveBeenCalledWith(LogLevel.SILLY, 'This is a trace message');
    });

    it('Can log debug messages', () => {
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.DEBUG);
        logger.debug('This is a debug message');
        expect(spy).toHaveBeenCalledWith(LogLevel.DEBUG, 'This is a debug message');
    });

    it('Can log verbose messages', () => {
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.VERBOSE);
        logger.verbose('This is a verbose message');
        expect(spy).toHaveBeenCalledWith(LogLevel.VERBOSE, 'This is a verbose message');
    });

    it('Can log info messages', () => {
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.INFO);
        logger.info('This is a info message');
        expect(spy).toHaveBeenCalledWith(LogLevel.INFO, 'This is a info message');
    });

    it('Can log warning messages', () => {
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.WARN);
        logger.warn('This is a warning message');
        expect(spy).toHaveBeenCalledWith(LogLevel.WARN, 'This is a warning message');
    });

    it('Can log error messages', () => {
        let spy: jasmine.Spy = spyOn((<any>logger)._logger, 'log');
        logger.setLogLevel(LogLevel.ERROR);
        logger.error('This is a error message');
        expect(spy).toHaveBeenCalledWith(LogLevel.ERROR, 'This is a error message');
    });

    // it('it can load log_filters from config', (done) => {
    //     let a: ConfigTestApp = new ConfigTestApp(JSON.stringify({
    //         binding_ip: null,
    //         port: null,
    //         authentication_header: 'X-BT-AUTH',
    //         log_level: 'error | fatal',
    //         backend_authentication_header: 'X-BT-BACKEND-AUTH',
    //         backend_authentication_secret: null,
    //         log_filters: [ '/test1/g', '/test2/g' ]
    //     }));

    //     logger.on('ready', () => {
    //         let logger: Logger = logger.getLogger();
    //         let filters: Array<RegExp> = logger.getFilters();
    //         expect(filters[0].toString()).toBe('/test1/g');
    //         expect(filters[1].toString()).toBe('/test2/g');
    //         done();
    //     });
    // });

    // it('FormatText handles logging unknown severity', () => {
    //     let mock: MockLogger = new MockLogger();
    //     expect(mock.formatString([ 'test', '123' ], 123123).indexOf('test 123')).toBeGreaterThan(-1);
    // });

    // it('FormatText handles logging objects', () => {
    //     let mock: MockLogger = new MockLogger();
    //     expect(mock.formatString([ {a: true, b: 123, c: 'test'} ], LogSeverity.INFO).indexOf(`{ a: true, b: 123, c: 'test' }`)).toBeGreaterThan(-1);
    // });

    // it('FormatText handles logging errors', () => {
    //     let mock: MockLogger = new MockLogger();
    //     expect(mock.formatString([ new Error('test error') ], LogSeverity.INFO).indexOf(`test error`)).toBeGreaterThan(-1);
    // });

    // it('can setLogStream', () => {
    //     let mock: MockLogger = new MockLogger();
    //     mock.setLogStream(process.stdout);
    //     expect(mock.getLogStream()).toBe(process.stdout);
    // });

    // it('can setErrorStream', () => {
    //     let mock: MockLogger = new MockLogger();
    //     mock.setErrorStream(process.stdout);
    //     expect(mock.getErrorStream()).toBe(process.stdout);
    // });

    describe('Deprecation', () => {
        class Deprecation {
            public deprecationWithNoAlternative(): void {
                logger.deprecate();
            }

            public deprecationWithAlternative(): void {
                logger.deprecate('properMethod');
            }
        }

        class DeprecatedClass {
            constructor() {
                logger.deprecate();
            }
        }

        class DeprecatedClassWithAlternative {
            constructor() {
                logger.deprecate('NonDeprecatedClass');
            }
        }

        let deprecation: Deprecation = new Deprecation();
        let methodMessageSpy: jasmine.Spy = null;
        let alternativeMessageSpy: jasmine.Spy = null;

        beforeEach(() => {
            spyOn((<any>logger)._logger, 'log');
            methodMessageSpy = spyOn<any>(logger, '_getDeprecatedMethodMessage');
            alternativeMessageSpy = spyOn<any>(logger, '_getDeprecatedAlternativeMessage');
            methodMessageSpy.and.callThrough();
            alternativeMessageSpy.and.callThrough();
        });

        it('deprecation with no alternative', () => {
            deprecation.deprecationWithNoAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Method Deprecation.deprecationWithNoAlternative is deprecated.');
            expect(alternativeMessageSpy).not.toHaveBeenCalled();
        });

        it('deprecation with alternative', () => {
            deprecation.deprecationWithAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Method Deprecation.deprecationWithAlternative is deprecated.');
            expect(alternativeMessageSpy).toHaveBeenCalledWith('properMethod');
            expect(alternativeMessageSpy.calls.mostRecent().returnValue).toBe('Use properMethod instead.');
        });

        it('deprecation class with no alternative', () => {
            new DeprecatedClass();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Class DeprecatedClass is deprecated.');
            expect(alternativeMessageSpy).not.toHaveBeenCalled();
        });

        it('deprecation class with alternative', () => {
            new DeprecatedClassWithAlternative();
            expect(methodMessageSpy).toHaveBeenCalled();
            expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Class DeprecatedClassWithAlternative is deprecated.');
            expect(alternativeMessageSpy).toHaveBeenCalledWith('NonDeprecatedClass');
            expect(alternativeMessageSpy.calls.mostRecent().returnValue).toBe('Use NonDeprecatedClass instead.');
        });
    });
});
