import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../../utils/api/apiConfig';

interface RequestOtpPayload {
    email: string;
};

interface VerifyOtpPayload {
    email: string;
    otp: string;
};

interface AuthResponse {
    message: string;
    user: {
        id: string, 
        email: string,
    };
    token: string;
};


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_CONFIG.baseUrl}/auth` }),
    endpoints: (builder) => ({
        requestOtp: builder.mutation<void, RequestOtpPayload>({
            query: (body) => ({
                url: '/request-otp',
                method: 'POST',
                body,
            }),
        }),
        verifyOtp: builder.mutation<AuthResponse, VerifyOtpPayload>({
            query: (body) => ({
                url: '/verify-otp',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useRequestOtpMutation, useVerifyOtpMutation } = authApi;