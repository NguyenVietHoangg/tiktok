import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profiler from '~/pages/Profiler';
import { HeaderOnly } from '~/layouts';
const publicRoute = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.profiler,
        component: Profiler,
    },
];

const privateRoute = [];
export { privateRoute, publicRoute };
