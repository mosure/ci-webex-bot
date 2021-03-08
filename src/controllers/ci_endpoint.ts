import { Request } from 'express';
import { body, param, validationResult } from 'express-validator';
import { inject } from 'inversify';
import {
    BaseHttpController,
    controller,
    httpPost,
    request,
    requestParam,
} from 'inversify-express-utils';

import { IBots, ILogger } from '@app/interfaces';
import TYPE from '@app/types';


@controller('/ci')
export class CIEndpointController extends BaseHttpController {
    @inject(TYPE.Logger)
    readonly logger!: ILogger;

    @inject(TYPE.Bots)
    readonly bots!: IBots;

    @httpPost('/message/:id',
        body('message').exists({ checkNull: true }).isString().notEmpty(),
        param('id').isUUID(),
    )
    public async message(
        @requestParam('id') id: string,
        @request() req: Request,
    ) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            this.logger.warn('Malformed message request.')
            return this.json(errors, 400);
        }

        const bot = this.bots.getBot(id);
        if (!bot) {
            this.logger.warn(`Bot not found: '${id}'`);
            return this.notFound();
        }

        this.logger.info(`Sending message to bot: '${id}'`);
        bot.say(req.body.message);

        return this.ok();
    }
}
