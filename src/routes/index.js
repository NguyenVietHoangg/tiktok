import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profiler from '~/pages/Profiler';
import { HeaderOnly } from '~/components/Layout';
const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/@:nick_name',
        component: Profiler,
    },
];

const privateRoute = [];
export { privateRoute, publicRoute };
