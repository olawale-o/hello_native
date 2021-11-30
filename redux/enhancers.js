import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunkMiddleware, logger];
const enhancers = applyMiddleware(...middlewares);
const composedEnhancers = compose(enhancers);

export default composedEnhancers;
