import {combineReducers} from 'redux';
import {pageReducer} from '../reducers/page';
import {userReducer} from '../reducers/user';

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer
});