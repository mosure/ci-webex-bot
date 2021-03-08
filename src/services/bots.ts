import { inject, injectable } from 'inversify';
import framework from 'webex-node-bot-framework';

import { Bot, IBots, ISettings } from '@app/interfaces';
import TYPES from '@app/types';


@injectable()
export class Bots implements IBots {
    private framework: any;

    constructor(
        @inject(TYPES.Settings) private settings: ISettings,
    ) {
        this.framework = framework({
            token: this.settings.webexToken,
        });

        this.framework.start();
    }

    public getBot(id: string): Bot | undefined {
        return this.framework.getBotByRoomId(id);
    }
}
