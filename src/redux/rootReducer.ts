import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { RootState } from './rootState';
import { eventsReducer } from './reducers/eventsReducer';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    events: eventsReducer,
});

export default rootReducer;