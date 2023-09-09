import Authentication from '../pages/Authentication';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import SearchEvent from '../pages/SearchEvent';
import CityRoute from './CityRoute';

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
        component: CityRoute,
    },
    {
        path: '/search',
        component: SearchEvent,
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