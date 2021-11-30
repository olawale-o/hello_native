import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import artistReducer from './artist';
import composedEnhancers from './enhancers';

const reduer = combineReducers({
  auth: authReducer,
  artist: artistReducer,
});
const configureStore = createStore(reduer, composedEnhancers);

export default configureStore;
