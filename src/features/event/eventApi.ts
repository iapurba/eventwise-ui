import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventType } from '../../types/EventType';
import API_CONFIG from '../../utils/api/apiConfig';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_CONFIG.baseUrl}/events` }),
    endpoints: (builder) => ({
        getEvents: builder.query<EventType[], void>({
            query: () => '/'
        }),
        getEventById: builder.query<any, string>({
            query: (eventId) => `/${eventId}`
        }),
        getEventByCity: builder.query<EventType[], string>({
            query: (city) => `?location=${city}`
        }),
    }),
});

export const { 
    useGetEventsQuery, 
    useGetEventByIdQuery,
    useGetEventByCityQuery,
} = eventApi;