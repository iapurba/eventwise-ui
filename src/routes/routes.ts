import Authentication from '../pages/Authentication';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

interface AppRoute {
    path: string,
    component: React.ComponentType;
    children?: AppRoute[];
};

export const routes: AppRoute[] = [
    {
        path: '/online',
        component: HomePage,
    },
    {
        path:'/:city',
        component: HomePage,
    },
    {
        path: '/authentication',
        component: Authentication,
    },
    {
        path:'*',
        component: NotFound,
    },
];