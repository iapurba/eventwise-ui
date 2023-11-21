import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const ticketApi = createApi({
    reducerPath: 'ticketApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: (builder) => ({
        getTicketsByEventId: builder.query<any, string>({
            query: (eventId) => `events/${eventId}/tickets`
        }),
    }),
});

export const { useGetTicketsByEventIdQuery } = ticketApi;