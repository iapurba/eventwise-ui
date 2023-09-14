export enum UserActionTypes {
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
};

export interface UserState {
    loading: boolean;
    user: null;
    error: null;
};

export type FetchUserAction = any;