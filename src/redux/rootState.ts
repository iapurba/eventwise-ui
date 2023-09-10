import { AuthState } from "./types/authTypes";
import { EventState } from "./types/eventTypes";

export interface RootState {
    auth: AuthState,
    event: EventState,
};