import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { RootState } from './rootState';

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
});

export default rootReducer;