import {
  FETCH_MOVIE,
  FETCHING_MOVIES,
  FETCH_MOVIE_ERROR
} from "../../actions/types";

const STATE = {
  data: {},
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { data: action.payload, loaded: true };
    case FETCH_MOVIE_ERROR:
      return { data: action.payload, loaded: true };
    case FETCHING_MOVIES:
      return (state = { ...state, loaded: false });
    default:
      return state;
  }
};
