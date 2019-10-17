import { FETCH_NEW_MOVIES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEW_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
