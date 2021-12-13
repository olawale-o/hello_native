import {
  AUTH_FAILURE,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_TOKEN,
} from './action_types';

export const authLoading = () => ({type: AUTH_LOADING});
export const authSuccess = payload => ({type: AUTH_SUCCESS, payload});
export const authFailure = () => ({type: AUTH_FAILURE});
export const authToken = payload => ({type: AUTH_TOKEN, payload});
