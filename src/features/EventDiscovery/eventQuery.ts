import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetEventBySlugQuery, useGetEventByCityQuery, useGetEventsQuery } from './eventApi'

export const useGetAllEvents = () => {
    const { data, error, isLoading } = useGetEventsQuery();
    return { data, error, isLoading };
};

export const useGetEventBySlug = (eventId: string) => {
    const { data: event, error, isLoading } = useGetEventBySlugQuery(eventId);
    return { event, error, isLoading };
};

export const useGetEventsByCity = (city: string | undefined) => {
    const { data: events, error, isLoading } = useGetEventByCityQuery(city ?? skipToken);
    return { events, error, isLoading };
};