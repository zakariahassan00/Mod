import { SET_CONTENT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return action.payload;

    default:
      return state;
  }
};
