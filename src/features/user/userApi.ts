import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../redux/store';
import API_CONFIG from '../../utils/api/apiConfig';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_CONFIG.baseUrl}`,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUserProfile: builder.query<any, void>({
            query: () => `users/me`
        }),
        updateUserProfile: builder.mutation<void, { userId: string, data: any }>({
            query: ({ userId, data }) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: data,
            })
        }),
    }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi;

