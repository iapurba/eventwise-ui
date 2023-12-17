import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
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
            console.log('loginAction ', action);
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = !!action.payload;
            // Save the token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('isAuthenticated', (!!action.payload).toString());
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = '';
            state.isAuthenticated = false;
            // Remove the token from local storage on logout
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;