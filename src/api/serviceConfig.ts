import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SERVICE_DOMAIN } from './apiConfig';
import { getAuthToken } from '../utils/cookieUtils';

interface ServiceConfig {
    path: string;
    method: AxiosRequestConfig['method'];
    payload?: any | null;
    params?: Record<string, string>;
};

const authToken = getAuthToken();

const createServiceRequest = async ({ path, method, payload = null, params = {} }: ServiceConfig) => {
    try {
        // Replace placeholders in the path with actual values
        let finalPath = path;
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                finalPath = finalPath.replace(`{${key}}`, params[key]);
            }
        };

        const config: AxiosRequestConfig = {
            method,
            url: `${SERVICE_DOMAIN}${finalPath}`,
            headers: {
                Authorization: authToken ? `Bearer ${authToken}` : '',
                'Content-Type': 'application/json',
            },
            data: payload ? JSON.stringify(payload) : null,
        };

        const response: AxiosResponse = await axios(config);
        return response.data;

    } catch (error) {
        throw error;
    }
};

export default createServiceRequest;