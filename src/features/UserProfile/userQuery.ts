import { useGetUserProfileQuery } from './userApi';

export const useGetUserProfile = () => {
    const { data: userProfile, error, isLoading } = useGetUserProfileQuery();
    return { userProfile, error, isLoading };
};