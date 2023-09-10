import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { RootState } from './rootState';
import { eventReducer } from './reducers/eventReducer';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    event: eventReducer,
});

export default rootReducer;