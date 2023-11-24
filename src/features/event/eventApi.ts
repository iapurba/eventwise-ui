import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Event } from '../../types/eventType';
import API_CONFIG from '../../utils/api/config';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_CONFIG.baseUrl}/events` }),
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => '/'
        }),
        getEventById: builder.query<any, string>({
            query: (eventId) => `/${eventId}`
        }),
        getEventByCity: builder.query<Event[], string>({
            query: (city) => `?location=${city}`
        }),
    }),
});

export const { 
    useGetEventsQuery, 
    useGetEventByIdQuery,
    useGetEventByCityQuery,
} = eventApi;