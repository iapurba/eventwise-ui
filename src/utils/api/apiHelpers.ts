import { RootState } from '../../redux/store';

export const prepareHeaders = (headers: Headers, getState: () => RootState): Headers => {
    const state = getState();
    const token = state.auth.token;

    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
};