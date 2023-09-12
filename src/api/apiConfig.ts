export const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN || 'http://localhost:3001';

interface serviceEndpoint {
    path: string,
    method: string,
};

type serviceUrlType = {
    [key: string]: serviceEndpoint;
};

export const AUTH_SERVICE_URL: serviceUrlType = {
    REGISTER_USER: {
        path: '/api/auth/register',
        method: 'post',
    },
    LOGIN_USER: {
        path: '/api/auth/login',
        method: 'post',
    },
};

export const EVENT_SERVICE_URL : serviceUrlType = {
    GET_EVENT: {
        path: '/api/events/{eventId}',
        method: 'get',
    },
    GET_EVENTS: {
        path: '/api/events',
        method: 'get',
    },
};