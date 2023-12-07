import { useUpdateUserProfileMutation } from './userApi';

export const useUpdateUserProfile = () => {
    const [updateUserProfile, { isLoading, isError, error }] = useUpdateUserProfileMutation();

    const updateUser = async (userId: string, newData: any) => {
        try {
            await updateUserProfile({ userId, data: newData });
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return { updateUser, isLoading, isError, error };
};