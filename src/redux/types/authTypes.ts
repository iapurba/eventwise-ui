export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
};

export interface AuthState {
    loading: boolean,
    token: string | null,
    error: string | null,
};

interface LoginRequestAction {
    type: AuthActionTypes.LOGIN_REQUEST,
};

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: any,
};

interface LoginFailureAction {
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: any,
};

export type AuthAction = (
    LoginRequestAction | LoginSuccessAction | LoginFailureAction
);
