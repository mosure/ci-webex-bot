import { injectable } from 'inversify';

import { ISettings } from '@app/interfaces';


@injectable()
export class Settings implements ISettings {
    appName: string;
    httpHost: string;
    httpPort: number;
    testMode = false;
    webexToken: string;

    constructor() {
        this.appName = process.env.APP_NAME || '';
        this.httpHost = process.env.HOST || '127.0.0.1';
        this.httpPort = +(process.env.PORT || 9874);
        this.webexToken = process.env.TOKEN || '';
    }
}
