import { FETCH_TOP_MOVIES, FETCHING_MOVIES } from "../actions/types";
const STATE = {
  data: [],
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_MOVIES:
      return { data: action.payload, loaded: true };
    case FETCHING_MOVIES:
      return (state = { ...state, loaded: false });
    default:
      return state;
  }
};
