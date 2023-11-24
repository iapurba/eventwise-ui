import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: null | {
        id: string;
        email: string;
    };
    token: string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: '',
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = !!action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = '';
            state.isAuthenticated = false;
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;