export enum EventsActionTypes {
    FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST',
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE',
};

export interface EventsState {
    events: any[];
    loading: boolean;
    error: any;
};

interface FetchEventsRequestAction {
    type: EventsActionTypes.FETCH_EVENTS_REQUEST;
};

interface FetchEventsSuccessAction {
    type: EventsActionTypes.FETCH_EVENTS_SUCCESS;
    payload: any;
};

interface FetchEventsFailureAction {
    type: EventsActionTypes.FETCH_EVENTS_FAILURE;
    payload: any;
}

export type FecthEventsAction = (
    FetchEventsRequestAction | FetchEventsSuccessAction | FetchEventsFailureAction
);



