import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { RootState } from './rootState';
import { eventReducer } from './reducers/eventReducer';
import { eventsReducer } from './reducers/eventsReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    user: userReducer,
    event: eventReducer,
    events: eventsReducer,
});

export default rootReducer;