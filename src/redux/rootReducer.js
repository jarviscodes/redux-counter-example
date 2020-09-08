import {combineReducers} from 'redux';
import counterReducer from './Counter/counter.reducer'

export const rootReducer = combineReducers({
    counter_state: counterReducer
})