import { Dispatch } from 'redux';
import { EventsActionTypes, FecthEventsAction } from '../types/eventsTypes';
import { fetchEventsService } from '../../api/services/eventService';

const fetchEventsRequest = (): FecthEventsAction => ({
    type: EventsActionTypes.FETCH_EVENTS_REQUEST,
});

const fetchEventsSuccess = (events: any[]): FecthEventsAction => ({
    type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
    payload: events,
});

const fetchEventsFailure = (error: any): FecthEventsAction => ({
    type: EventsActionTypes.FETCH_EVENTS_FAILURE,
    payload: error,
});

export const fetchEvents = () => {
    return async (dispatch: Dispatch<FecthEventsAction>) => {
        dispatch(fetchEventsRequest());
        try {
            const events = await fetchEventsService();
            dispatch(fetchEventsSuccess(events));
        } catch (error) {
            dispatch(fetchEventsFailure(error));
        }
    };
};