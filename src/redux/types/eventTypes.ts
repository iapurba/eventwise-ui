export enum EventActionTypes {
    FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST',
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE',
};

export interface EventState {
    events: any[],
    loading: boolean,
    error: any,
};

interface FetchEventsRequestAction {
    type: EventActionTypes.FETCH_EVENTS_REQUEST,
};

interface FetchEventsSuccessAction {
    type: EventActionTypes.FETCH_EVENTS_SUCCESS,
    payload: any
};

interface FetchEventsFailureAction {
    type: EventActionTypes.FETCH_EVENTS_FAILURE,
    payload: any
}

export type FecthEventsAction = (
    FetchEventsRequestAction | FetchEventsSuccessAction | FetchEventsFailureAction
);



