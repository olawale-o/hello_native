import { ARTIST_FAILURE, ARTIST_LOADING, FETCH_ARTISTS } from "./action_types";

const initialState = {
  artists: [],
  artist: null,
  loading: true,
  error: null,
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false,
    };
    case ARTIST_LOADING:
      return { ...state, loading: true };
    case ARTIST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }  
};

export default artistReducer;
