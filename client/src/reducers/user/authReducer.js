import { FETCH_USER, FETCH_USER_ERROR } from "../../actions/types";

const STATE = {
  user: false,
  error: ""
};

export default (state = STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload || false };
    case FETCH_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
