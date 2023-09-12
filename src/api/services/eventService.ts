import { EVENT_SERVICE_URL } from '../apiConfig';
import createServiceRequest from '../serviceConfig';

export const fetchEventsService = async () => {
    try {
        const { path, method } = EVENT_SERVICE_URL.GET_EVENTS;
        const data = await createServiceRequest({ method, path });
        return data;

    } catch (error) { throw error; }
};

export const fetchEventByIdService = async (eventId: string) => {
    try {
        const { path, method } = EVENT_SERVICE_URL.GET_EVENT;
        const params = { eventId };
        const data = await createServiceRequest({ method, path, params });
        return data;

    } catch (error) { throw error; }
};