import { useGetUserProfileQuery } from './userApi';

export const useGetUserProfile = () => {
    const { data: user, error, isLoading } = useGetUserProfileQuery();
    return { user, error, isLoading };
};