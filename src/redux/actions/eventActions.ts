import { Dispatch } from 'redux';
import { fetchEventByIdService } from '../../api/services/eventService';
import { FetchEventAction, EventActionTypes } from '../types/eventTypes';

const fetchEventRequest = (): FetchEventAction => ({
    type: EventActionTypes.FETCH_EVENT_REQUEST,
});

const fetchEventSuccess = (user: any): FetchEventAction => ({
    type: EventActionTypes.FETCH_EVENT_SUCCESS,
    payload: user,
});

const fetchEventFailure = (error: any): FetchEventAction => ({
    type: EventActionTypes.FETCH_EVENT_FAILURE,
    payload: error,
});

export const fetchEventById = (id: string) => {
    return async (dispatch: Dispatch<FetchEventAction>) => {
        dispatch(fetchEventRequest());
        try {
            const user = await fetchEventByIdService(id);
            dispatch(fetchEventSuccess(user));

        } catch (error) {
            dispatch(fetchEventFailure(error));
        }
    }
};