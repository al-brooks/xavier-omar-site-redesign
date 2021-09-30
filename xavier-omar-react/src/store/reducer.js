import * as actionTypes from '../store/actions/actionTypes';

const initialState = {
  music: [],
  videos: [],
  merch: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MUSIC_LOADED:
      return {
        ...state,
        music: action.payload
      };
    case actionTypes.VIDEOS_LOADED:
      return {
        ...state,
        videos: action.payload
      };
    case actionTypes.MERCH_LOADED:
      return {
        ...state,
        merch: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
