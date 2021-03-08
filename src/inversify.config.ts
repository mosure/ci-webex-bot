import { ContainerModule, interfaces } from 'inversify';

import { IBots, ILogger, ISettings } from '@app/interfaces';
import { Bots, create_logger, Settings } from '@app/services';
import TYPES from '@app/types';


export const bindings = new ContainerModule((bind) => {
    bind<IBots>(TYPES.Bots).to(Bots).inSingletonScope();
    bind<ISettings>(TYPES.Settings).to(Settings).inSingletonScope();
    bind<ILogger>(TYPES.Logger).toDynamicValue((context: interfaces.Context) => {
        const settings = context.container.get<ISettings>(TYPES.Settings);

        return create_logger(settings);
    });
});
