import { FETCH_MOVIE } from "../actions/types";

const STATE = {
  data: {},
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { data: action.payload, loaded: true };
    default:
      return state;
  }
};
