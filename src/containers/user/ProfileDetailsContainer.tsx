import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileTabs from '../../components/user/UserProfileTabs';
import FavouriteEventsContainer from './FavouriteEventsContainer';
import EditProfileContainer from './EditProfileContainer';
import BookingHistoryContainer from './BookingHistoryContainer';

interface TabItem {
    label: string;
    component: React.ReactNode;
}

const tabs: TabItem[] = [
    { label: 'Bookings', component: <BookingHistoryContainer /> },
    { label: 'Favourites', component: <FavouriteEventsContainer /> },
    { label: 'Edit Profile', component: <EditProfileContainer /> },
];

const ProfileDetailsContainer = () => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const navigate = useNavigate();
    const location = useLocation();

    const determineInitialTabFromRoute = (path: string): number => {
        if (path === '/users/me') return 0;
        else if (path === '/users/me/bookings') return 0;
        else if (path === '/users/me/favourites') return 1;
        else if (path === '/users/me/profile') return 2;
        else return -1000;
    };

    useEffect(() => {
        let path = location.pathname;
        setActiveTabIndex(determineInitialTabFromRoute(path));
    }, [location.pathname]);

    const handleRouteFromTabChange = (tabIndex: number) => {
        setActiveTabIndex(tabIndex);

        switch (tabIndex) {
            case 0:
                navigate('/users/me/bookings');
                break;
            case 1:
                navigate('/users/me/favourites');
                break;
            case 2:
                navigate('/users/me/profile');
                break;
            default:
                navigate('/users/me');
                break;
        }
    };

    return (
        <UserProfileTabs tabs={tabs} tabIndex={activeTabIndex} onTabChange={handleRouteFromTabChange} />
    );
};

export default ProfileDetailsContainer;