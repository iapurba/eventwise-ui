import { AuthState } from './types/authTypes';
import { EventState } from './types/eventTypes';
import { EventsState } from './types/eventsTypes';

export interface RootState {
    auth: AuthState;
    event: EventState;
    events: EventsState;
};