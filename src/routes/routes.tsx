import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import UserProfilePage from '../pages/UserProfilePage';
import HomePage from '../pages/HomePage';
import CityRoute from './CityRoute';
import EventPage from '../pages/EventPage';
import TicketsPage from '../pages/TicketsPage';
import CheckoutPage from '../pages/CheckoutPage';
import SearchPage from '../pages/SearchPage';
import RootLayout from '../components/layouts/RootLayout';


export const router = createBrowserRouter([

    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/users/me',
                element: <UserProfilePage />,
            },
            {
                path: '/users/login',
                element: <LoginPage />,
            },
            {
                path: '/users/me',
                element: <UserProfilePage />,
            },
            {
                path: '/online',
                element: <HomePage />,
            },
            {
                path: '/:city',
                element: <CityRoute />,
            },
            {
                path: '/events/:eventId',
                element: <EventPage />,
            },
            {
                path: '/buy/events/:eventId/tickets',
                element: <TicketsPage />,
            },
            {
                path: '/buy/checkout',
                element: <CheckoutPage />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ]
    }
]);