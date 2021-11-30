import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import composedEnhancers from './enhancers';

const reduer = combineReducers({ auth: authReducer });
const configureStore = createStore(reduer, composedEnhancers);

export default configureStore;
