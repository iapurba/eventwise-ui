import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import CityRoute from './CityRoute';
import EventPage from '../pages/EventPage';
import TicketsPage from '../pages/TicketsPage';
import CheckoutPage from '../pages/CheckoutPage';
import SearchPage from '../pages/SearchPage';
import RootLayout from '../layouts/RootLayout';
import PrivateRoute from './PrivateRoute';
import PaymentPage from '../pages/PaymentPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/all-events/:city',
                element: <CityRoute />,
            },
            {
                path: '/explore/:city',
                element: <CityRoute />,
            },
            {
                path: '/online',
                element: <HomePage />,
            },
            {
                path: '/:slug/event',
                element: <EventPage />,
            },
            {
                path: 'event/:slug/buy/:eventId/tickets',
                element: <TicketsPage />,
            },
            {
                path: '/buy/checkout',
                element: <CheckoutPage />,
            },
            {
                path: '/users/login',
                element: <LoginPage />,
            },
            {
                path: '/users/me',
                element: <PrivateRoute element={<ProfilePage />}/>,
            },
            {
                path: '/users/me/:tab',
                element: <PrivateRoute element={<ProfilePage />}/>,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '/payments/success',
                element: <PaymentPage/>
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ]
    }
]);