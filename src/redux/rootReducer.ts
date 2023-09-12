import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { RootState } from './rootState';
import { eventReducer } from './reducers/eventReducer';
import { eventsReducer } from './reducers/eventsReducer';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    event: eventReducer,
    events: eventsReducer,
});

export default rootReducer;