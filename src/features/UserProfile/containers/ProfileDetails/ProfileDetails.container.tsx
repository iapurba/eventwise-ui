import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileTabs from '../../components/UserProfileTabs/UserProfileTabs';
import FavouriteEventsContainer from '../FavouriteEventsContainer';
import BookingHistoryContainer from '../BookingHistoryContainer';
import { useGetUserProfile } from '../../userQuery';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../Authentication/authSlice';
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader';
import { constructUpdateUserJsonPayload, normalizeUserRtkData } from './ProfileDetails.helper';
import { UserProfileType } from '../../types/userProfile.types';
import { useUpdateUserProfile } from '../../userMutation';
import EditProfile from '../../components/EditProfile/EditProfile';

interface TabItem {
    label: string;
    component: React.ReactNode;
}

const ProfileDetailsContainer: React.FC = () => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const { userProfile, isLoading } = useGetUserProfile();
    const { updateUserProfile } = useUpdateUserProfile();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleEditProfile = () => {
        navigate('/users/me/profile');
    };

    const handleSignOut = () => {
        dispatch(logoutUser());
        navigate('/explore/kolkata');
    };

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

    const onUserProfileUpdate = async (profile: UserProfileType) => {
        console.log({profile});
        const updatedData = constructUpdateUserJsonPayload(profile);
        await updateUserProfile(profile.id, updatedData);
    };

    const tabs: TabItem[] = [
        { label: 'Bookings', component: <BookingHistoryContainer /> },
        { label: 'Favourites', component: <FavouriteEventsContainer /> },
        {
            label: 'Edit Profile',
            component: userProfile ? (
                <EditProfile
                    initialProfile={normalizeUserRtkData(userProfile)}
                    onUpdate={onUserProfileUpdate}
                />
            ) : null,
        },
    ];

    return (
        <div className='profile-details-container'>
            {isLoading
                ? <>Loading</>
                : <>
                    <UserProfileHeader
                        email={userProfile?.email}
                        firstName={userProfile?.firstName}
                        lastName={userProfile?.lastName}
                        onEditProfile={handleEditProfile}
                        onSignOut={handleSignOut}
                    />
                    <UserProfileTabs
                        tabs={tabs}
                        tabIndex={activeTabIndex}
                        onTabChange={handleRouteFromTabChange}
                    />
                </>
            }
        </div>
    );
};

export default ProfileDetailsContainer;