import { combineReducers } from '@reduxjs/toolkit';
import { eventApi } from '../features/event/eventApi';
import { ticketApi } from '../features/ticket/ticketApi';
import { authApi } from '../features/auth/authApi';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/booking/cartSlice';
import { userApi } from '../features/user/userApi';

const rootReducer = combineReducers({
    [eventApi.reducerPath]: eventApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;