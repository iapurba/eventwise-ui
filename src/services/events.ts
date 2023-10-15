import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Event } from '../types/eventType';

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => 'events'
        }),

        getEventById: builder.query<any, string>({
            query: (eventId) => `events/${eventId}`
        }),
    }),
});

export const { useGetEventsQuery, useGetEventByIdQuery } = eventApi;