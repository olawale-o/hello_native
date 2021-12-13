import {
  ARTIST_LOADING,
  FETCH_ARTIST,
  FETCH_ARTISTS,
  ARTIST_FAILURE,
} from './action_types';

export const artistLoading = () => ({type: ARTIST_LOADING});
export const fetchArtists = payload => ({type: FETCH_ARTISTS, payload});
export const fetchArtist = () => ({type: FETCH_ARTIST});
export const artistFailure = payload => ({type: ARTIST_FAILURE, payload});
