import { AUTH_FAILURE, AUTH_LOADING, AUTH_SUCCESS } from './action_types';

const initialState = { 
  loading: false,
  user: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case AUTH_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;
