
import Jasmine = require('jasmine');
import {ProgressReporter} from '@breautek/jasmine-progress-reporter';
import {SpecReporter} from 'jasmine-spec-reporter';

let jasmine = new Jasmine(null);

let spec: string = process.argv[2] ? process.argv[2] : '**/*[sS]pec.ts';

let config: any = {
    spec_dir: 'spec',
    spec_files: [ '!**/node_modules/**', spec ],
    random: false,
    stopSpecOnExpectationFailure: false
};

jasmine.env.clearReporters();
if (process.env.CI) {
    jasmine.addReporter(<any>(new SpecReporter()));
}
else {
    jasmine.addReporter(<any>(new ProgressReporter()));
}

jasmine.loadConfig(config);

jasmine.execute();
