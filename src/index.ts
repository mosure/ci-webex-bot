import get_app from '@app/app';
import { ISettings } from '@app/interfaces';
import { bindings } from '@app/inversify.config';
import TYPES from '@app/types';


const build_app_res = get_app(bindings);
const settings = build_app_res.container.get<ISettings>(TYPES.Settings);

console.log(`Server listening on: http://${settings.httpHost}:${settings.httpPort}`);
build_app_res.app.listen(settings.httpPort, settings.httpHost);
