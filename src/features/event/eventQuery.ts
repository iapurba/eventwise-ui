import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetEventByIdQuery, useGetEventByCityQuery, useGetEventsQuery } from './eventApi'

export const useGetAllEvents = () => {
    const { data: events, error, isLoading } = useGetEventsQuery();
    return { events, error, isLoading };
};

export const useGetEvent = (eventId: string) => {
    const { data: event, error, isLoading } = useGetEventByIdQuery(eventId);
    return { event, error, isLoading };
};

export const useGetEventsByCity = (city: string | undefined) => {
    const { data: events, error, isLoading } = useGetEventByCityQuery(city ?? skipToken);
    return { events, error, isLoading };
};