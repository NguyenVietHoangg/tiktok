import routesConfig from '~/config/routes'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profiler from '~/pages/Profiler';
import { HeaderOnly } from '~/components/Layout';
const publicRoute = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.profiler,
        component: Profiler,
    },
];

const privateRoute = [];
export { privateRoute, publicRoute };
