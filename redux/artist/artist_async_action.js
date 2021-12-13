import {MOVIEDB_API_KEY} from '@env';
import {fetchArtists, artistFailure, fetchArtist} from './action_creators';

export const getArtists = () => {
  return async function getArtists(dispatch) {
    try {
      const uri = `https://api.themoviedb.org/3/person/popular?api_key=${MOVIEDB_API_KEY}`;
      const headers = {
        'Content-type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      };
      const response = await fetch(uri, {headers});
      const {results} = await response.json();
      dispatch(fetchArtists(results));
    } catch (error) {
      dispatch(artistFailure(error));
    }
  };
};

export const getArtist = id => {
  return async function getArtist(dispatch) {
    try {
      const uri = `https://api.themoviedb.org/3/person/${id}?api_key=${MOVIEDB_API_KEY}`;
      const headers = {
        'Content-type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      };
      const response = await fetch(uri, {headers});
      const {results} = await response.json();
      dispatch(fetchArtist(results));
    } catch (error) {
      dispatch(artistFailure(error));
    }
  };
};
