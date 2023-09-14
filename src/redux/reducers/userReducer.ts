import { FetchUserAction, UserActionTypes, UserState } from '../types/userTypes';

const initialState : UserState = {
    loading: false,
    user: null,
    error: null,
};

export const userReducer = (state = initialState, action: FetchUserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: null,
                error: null,
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
            }
        case UserActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
            }
        default:
            return state;
    }
};