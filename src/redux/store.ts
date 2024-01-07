import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from '../features/event/eventApi';
import { ticketApi } from '../features/ticket/ticketApi';
import { authApi } from '../features/auth/authApi';
import rootReducer from './rootReducer';
import { userApi } from '../features/user/userApi';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(eventApi.middleware)
            .concat(ticketApi.middleware)
            .concat(authApi.middleware)
            .concat(userApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;