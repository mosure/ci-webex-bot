import { injectable } from 'inversify';

import { ISettings } from '@app/interfaces';


@injectable()
export class MockSettings implements ISettings {
    appName: string;
    httpHost: string;
    httpPort: number;
    testMode: boolean;
    webexToken: string;

    constructor() {
        this.appName = 'example_testing';
        this.httpHost = '';
        this.httpPort = 0;
        this.testMode = true;
        this.webexToken = '';
    }
}
