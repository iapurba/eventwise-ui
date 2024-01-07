import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_CONFIG from '../../utils/api/apiConfig';
import { EventApiResponse, EventBySlugApiResponse } from './types/event';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_CONFIG.baseUrl}/events` }),
    endpoints: (builder) => ({
        getEvents: builder.query<EventApiResponse, void>({
            query: () => '/'
        }),
        getEventBySlug: builder.query<EventBySlugApiResponse, string>({
            query: (slug) => `bySlug/${slug}`
        }),
        getEventByCity: builder.query<EventApiResponse, string>({
            query: (city) => `/byCity/${city}`
        }),
    }),
});

export const { 
    useGetEventsQuery, 
    useGetEventBySlugQuery,
    useGetEventByCityQuery,
} = eventApi;