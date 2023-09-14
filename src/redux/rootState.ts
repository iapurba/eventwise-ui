import { AuthState } from './types/authTypes';
import { EventState } from './types/eventTypes';
import { EventsState } from './types/eventsTypes';
import { UserState } from './types/userTypes';

export interface RootState {
    auth: AuthState;
    user: UserState;
    event: EventState;
    events: EventsState;
};