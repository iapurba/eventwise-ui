import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setAuthToken = (authToken: string) => {
    cookies.set('authToken', authToken, { path: '/' });
};

export const getAuthToken = (): string | null => {
    return cookies.get('authToken') || null;
};

export const removeAuthToken = () => {
    cookies.remove('authToken', { path: '/' });
};