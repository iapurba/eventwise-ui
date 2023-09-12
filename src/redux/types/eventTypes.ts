export enum EventActionTypes  {
    FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST',
    FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS',
    FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE',
};

export interface EventState {
    loading: boolean;
    event: any;
    error: any;
};

interface FetchEventRequestAction {
    type: EventActionTypes.FETCH_EVENT_REQUEST;
};

interface FetchEventSuccessAction {
    type: EventActionTypes.FETCH_EVENT_SUCCESS;
    payload: any;
};

interface FetchEventFailureAction {
    type: EventActionTypes.FETCH_EVENT_FAILURE;
    payload: any;
};

export type FetchEventAction = (
    FetchEventRequestAction | FetchEventSuccessAction | FetchEventFailureAction
);