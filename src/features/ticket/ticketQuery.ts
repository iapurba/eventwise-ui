import { useGetTicketsByEventIdQuery } from "./ticketApi"

export const useGetEventTickets = (eventId: string) => {
    const {
        data: tickets,
        isLoading,
        isError
    } = useGetTicketsByEventIdQuery(eventId);

    return {tickets, isLoading, isError};
};