import { combineReducers } from '@reduxjs/toolkit';
import { eventApi } from "../features/event/eventApi";
import { ticketApi } from "../features/ticket/ticketApi";
import { authApi } from "../features/auth/authApi";
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    [eventApi.reducerPath]: eventApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
});

export default rootReducer;