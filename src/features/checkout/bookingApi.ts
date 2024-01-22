import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_CONFIG from '../../utils/api/apiConfig';

interface BookTicketsPayload {
    eventId: string,
    data: any,
}

const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_CONFIG.baseUrl }),
    endpoints: (builder) => ({
        bookTickets: builder.mutation<void, BookTicketsPayload>({
            query: ({ eventId, data }) => ({
                url: `/events/${eventId}/bookings`,
                method: 'POST',
                data
            }),
        })
    }),
});

export const { useBookTicketsMutation } = bookingApi;