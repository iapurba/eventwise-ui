import { AUTH_SERVICE_URL } from '../apiConfig';
import createServiceRequest from '../serviceConfig';

export const loginUserService = async (payload: any) => {
    try {
        const { path, method } = AUTH_SERVICE_URL.LOGIN_USER;
        const data = await createServiceRequest({ method, path, payload });
        return data;

    } catch (error) { throw error; }
};