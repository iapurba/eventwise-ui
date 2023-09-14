import { USER_SERVICE_URL } from '../apiConfig';
import createServiceRequest from '../serviceConfig';

export const getUserProfileService = async () => {
    try {
        const { path, method } = USER_SERVICE_URL.GET_USER_PROFILE;
        const userProfileData = await createServiceRequest({ method, path });
        return userProfileData;

    } catch (error) {
        throw error;
    }
};