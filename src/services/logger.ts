import * as winston from 'winston';

import { ILogger, ISettings } from '@app/interfaces';


export const create_logger = function(settings: ISettings): ILogger {
    return winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.json(),
            winston.format.metadata()
        ),
        defaultMeta: {
            service: settings.appName,
        },
        transports: [
            new winston.transports.Console({
                format: winston.format.simple(),
                silent: settings.testMode
            }),
        ],
    });
};
