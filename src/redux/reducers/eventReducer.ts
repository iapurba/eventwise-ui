import { EventState, FetchEventAction, EventActionTypes } from '../types/eventTypes';

const initialState: EventState = {
    loading: false,
    event: null,
    error: null,
};

export const eventReducer = (state = initialState, action: FetchEventAction): EventState => {
    switch (action.type) {
        case EventActionTypes.FETCH_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                event: null,
                error: null,
            }
        case EventActionTypes.FETCH_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                event: action.payload,
                error: null,
            }
        case EventActionTypes.FETCH_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                event: null,
                error: action.payload,
            }
        default:
            return state;
    }
};