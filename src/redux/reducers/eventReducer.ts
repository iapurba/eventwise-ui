import { EventActionTypes, EventState, FecthEventsAction } from "../types/eventTypes";

const initialState: EventState = {
    events: [],
    loading: false,
    error: null,
};

export const eventReducer = (state = initialState, action: FecthEventsAction): EventState => {
    switch (action.type) {
        case EventActionTypes.FETCH_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case EventActionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false,
                error: null,
            }
        case EventActionTypes.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};