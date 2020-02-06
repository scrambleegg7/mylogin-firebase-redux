import {createStore, combineReducers, applyMiddleware} from 'redux';
import { authControl } from './auth-control';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authControl,
        }), 
        applyMiddleware(thunk, logger)
    );



    return store;
}
