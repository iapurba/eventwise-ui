import { AuthAction, AuthActionTypes, AuthState } from '../types/authTypes';

const initialState: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    token: null,
    error: null,
};

const authReducer = (state = initialState, action:AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
            }
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                token: action.payload,
                error: null,
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                error: action.payload,
            };
        default: return state;
    }
};

export default authReducer;