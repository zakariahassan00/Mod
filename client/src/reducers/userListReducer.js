import {
  FETCH_WATCH_LIST,
  FETCH_FAVORITES_LIST,
  FETCH_RATE_LIST
} from "../actions/types";

const STATE = {
  lists: {
    watchlist: [],
    ratelist: [],
    favoriteslist: []
  },
  loaded: false
};

export default (state = STATE, action) => {
  const userlist = state.lists;
  switch (action.type) {
    case FETCH_WATCH_LIST:
      return {
        ...state,
        lists: { ...userlist, watchlist: action.payload },
        loaded: true
      };
    case FETCH_FAVORITES_LIST:
      return {
        ...state,
        lists: { ...userlist, favoriteslist: action.payload },
        loaded: true
      };
    case FETCH_RATE_LIST:
      return {
        ...state,
        lists: { ...userlist, ratelist: action.payload },
        loaded: true
      };
    default:
      return state;
  }
};
