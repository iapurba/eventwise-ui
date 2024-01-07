import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    user: null | {
        id: string;
        email: string;
    };
    token: string;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    token: '',
    isLoggedIn: true || (
        localStorage.getItem('isLoggedIn') ? true : false
    )
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
            state.isLoggedIn = !!action.payload;
            // Save the token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('isLoggedIn', (!!action.payload).toString());
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = '';
            state.isLoggedIn = false;
            // Remove the token from local storage on logout
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;