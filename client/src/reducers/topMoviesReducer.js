import { FETCH_TOP_MOVIES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
