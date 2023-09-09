import { Dispatch } from 'redux';
import { AuthAction, AuthActionTypes } from '../types/authTypes';
import { loginUserService } from '../../api/services/authService';
import { setAuthToken } from '../../utils/cookieUtils';

export const loginRequest = (): AuthAction => ({
    type: AuthActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (token: string): AuthAction => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: token,
});

export const loginFailure = (error: string): AuthAction => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: error,
});

export const login = (credentials: any) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch(loginRequest());
        try {
            const userData = await loginUserService(credentials);
            const { token } = userData;
            setAuthToken(token);
            dispatch(loginSuccess(token));

        } catch (error) {
            dispatch(loginFailure('Login failed'));
        }
    };
};