import Authentication from '../pages/Authentication';
import EventDetails from '../pages/EventDetails';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import SearchEvent from '../pages/SearchEvent';
import ShowTickets from '../pages/EventTickets';
import CityRoute from './CityRoute';
import Checkout from '../pages/Checkout';
import UserProfile from '../pages/UserProfile';

interface AppRoute {
    path: string,
    component: React.ComponentType;
    children?: AppRoute[];
};

export const routes: AppRoute[] = [
    {
        path: '/users/login',
        component: Authentication,
    },
    {
        path: '/users/me',
        component: UserProfile,
    },
    {
        path: '/online',
        component: HomePage,
    },
    {
        path:'/:city',
        component: CityRoute,
    },
    {
        path: '/events/:eventId',
        component: EventDetails,
    },
    {
        path: '/buy/events/:eventId/tickets',
        component: ShowTickets,
    },
    {
        path: '/buy/checkout',
        component: Checkout,
    },
    {
        path: '/search',
        component: SearchEvent,
    },
    {
        path:'*',
        component: NotFound,
    },
];