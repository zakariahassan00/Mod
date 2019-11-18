import {
  FETCH_WATCH_LIST,
  FETCH_FAVORITES_LIST,
  FETCH_RATE_LIST,
  FETCHING_MOVIES
} from "../actions/types";

const STATE = {
  data: [],
  loaded: false
};

export default (state = STATE, action) => {
  const userlist = state.lists;
  switch (action.type) {
    case FETCH_WATCH_LIST:
      return { data: action.payload, loaded: true };
    case FETCHING_MOVIES:
      return (state = { ...state, loaded: false });
    default:
      return state;
  }
};
