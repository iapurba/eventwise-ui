import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SERVICE_DOMAIN } from './apiConfig';
import { getAuthToken } from '../utils/cookieUtils';

interface ServiceConfig {
    path: string,
    method: AxiosRequestConfig['method'],
    payload?: any | null,
};

const authToken = getAuthToken();

const createServiceRequest = async ({ path, method, payload = null }: ServiceConfig) => {
    try {
        const config: AxiosRequestConfig = {
            method,
            url: `${SERVICE_DOMAIN}${path}`,
            headers: {
                Authorization: authToken ? `Bearer ${authToken}` : '',
                'Content-Type': 'application/json',
            },
            data: payload ? JSON.stringify(payload) : null,
        }

        const response: AxiosResponse = await axios(config);
        return response.data;

    } catch (error) {
        throw error;
    }
};

export default createServiceRequest;