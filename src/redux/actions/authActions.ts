import axios from 'axios';
import { Dispatch } from 'redux';
import { AuthAction, AuthActionTypes } from '../types/authTypes';

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
            const response = await axios.post(
                'http://localhost:3001/api/auth/login',
                credentials
            );
            const { token } = response.data;
            dispatch(loginSuccess(token));

        } catch (error) {
            dispatch(loginFailure('Login failed'));
        }
    };
};