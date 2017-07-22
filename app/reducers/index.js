import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';

// TODO should be changed
const tempReducer = (state = '', action) => {
    if(action) {
        return state;
    }
    return state;
};


const rootReducer = combineReducers({
    tempReducer,
    routing
});

export default rootReducer;
