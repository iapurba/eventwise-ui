import { Dispatch } from 'redux';
import { EventActionTypes, FecthEventsAction } from '../types/eventTypes';
import { fetchEventsService } from '../../api/services/eventService';

const fetchEventsRequest = (): FecthEventsAction => ({
    type: EventActionTypes.FETCH_EVENTS_REQUEST,
});

const fetchEventsSuccess = (events: any[]): FecthEventsAction => ({
    type: EventActionTypes.FETCH_EVENTS_SUCCESS,
    payload: events,
});

const fetchEventsFailure = (error: any): FecthEventsAction => ({
    type: EventActionTypes.FETCH_EVENTS_FAILURE,
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