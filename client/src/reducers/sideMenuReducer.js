import { TOGGLE_SIDE_BAR } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return action.payload;
    default:
      return state;
  }
};
