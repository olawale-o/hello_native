import {
  AUTH_FAILURE,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_TOKEN,
  AUTH_LOGOUT,
} from './action_types';

const initialState = {
  loading: false,
  user: null,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {...state, loading: true};
    case AUTH_SUCCESS:
      return {...state, loading: false, user: action.payload};
    case AUTH_TOKEN:
      return {...state, loading: false, userToken: action.payload};
    case AUTH_FAILURE:
      return {...state, loading: false};
    case AUTH_LOGOUT:
      return {...state, loading: false, user: null, userToken: null};
    default:
      return state;
  }
};

export default authReducer;
