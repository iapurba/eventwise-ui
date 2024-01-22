import { useUpdateUserProfileMutation } from './userApi';

export const useUpdateUserProfile = () => {
    const [updateUser, { isLoading, isError, error }] = useUpdateUserProfileMutation();

    const updateUserProfile = async (userId: string, newData: any) => {
        try {
            await updateUser({ userId, data: newData });
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return { updateUserProfile, isLoading, isError, error };
};