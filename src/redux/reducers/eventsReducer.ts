import { EventsActionTypes, EventsState, FecthEventsAction } from "../types/eventsTypes";

const initialState: EventsState = {
    events: [],
    loading: false,
    error: null,
};

export const eventsReducer = (state = initialState, action: FecthEventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case EventsActionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false,
                error: null,
            }
        case EventsActionTypes.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};