import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from '../services/eventApi';
import { ticketApi } from '../services/ticketApi';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import { authApi } from '../services/authApi';

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath]: eventApi.reducer,
        [ticketApi.reducerPath]: ticketApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            eventApi.middleware,
            ticketApi.middleware,
            authApi.middleware,
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;