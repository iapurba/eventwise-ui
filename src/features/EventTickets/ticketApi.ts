import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import TicketType from '../../types/TicketType';

export const ticketApi = createApi({
    reducerPath: 'ticketApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/api/events` }),
    endpoints: (builder) => ({
        getTicketsByEventId: builder.query<TicketType[], string>({
            query: (eventId) => `/${eventId}/tickets`
        }),
    }),
});

export const { useGetTicketsByEventIdQuery } = ticketApi;