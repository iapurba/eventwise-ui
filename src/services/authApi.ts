import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RequestOtpPayload {
    email: string;
};

interface VerifyOtpPayload {
    otp: string;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        requestOtp: builder.mutation<void, RequestOtpPayload>({
            query: (body) => ({
                url: '/request-otp',
                method: 'POST',
                body,
            }),
        }),
        verifyOtp: builder.mutation<void, VerifyOtpPayload>({
            query: (body) => ({
                url: '/verify-otp',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useRequestOtpMutation, useVerifyOtpMutation } = authApi;