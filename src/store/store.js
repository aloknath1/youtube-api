import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import playlist from './videos';

const rootReducer = combineReducers({playlist});
const store= configureStore({
    reducer: rootReducer,
});

export {rootReducer, store};
