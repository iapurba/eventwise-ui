import { AuthAction, AuthActionTypes, AuthState } from '../types/authTypes';

const initialState: AuthState = {
    loading: false,
    token: null,
    error: null,
};

const authReducer = (state = initialState, action:AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: null,
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                token: null,
                error: action.payload,
            };
        default: return state;
    }
};

export default authReducer;