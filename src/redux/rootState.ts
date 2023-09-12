import { AuthState } from "./types/authTypes";
import { EventsState } from "./types/eventsTypes";

export interface RootState {
    auth: AuthState;
    events: EventsState;
};