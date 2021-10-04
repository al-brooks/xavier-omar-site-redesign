import * as actionTypes from '../actions/actionTypes';

export const fetchMusic = () => {
  return (dispatch) => {
    fetch('https://xavier-omar-redesign-server.herokuapp.com/api/music')
      .then((response) => response.json())
      .then((music) => {
        dispatch({ type: actionTypes.MUSIC_LOADED, payload: music });
      });
  };
};

export const fetchVideos = () => {
  return (dispatch) => {
    fetch('https://xavier-omar-redesign-server.herokuapp.com/api/videos')
      .then((response) => response.json())
      .then((videos) => {
        dispatch({ type: actionTypes.VIDEOS_LOADED, payload: videos });
      });
  };
};

export const fetchMerch = () => {
  return (dispatch) => {
    fetch('https://xavier-omar-redesign-server.herokuapp.com/api/merch')
      .then((response) => response.json())
      .then((merch) => {
        dispatch({ type: actionTypes.MERCH_LOADED, payload: merch });
      });
  };
};
