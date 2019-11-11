import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";
import newMoviesReducer from "./newMoviesReducer";
import topMoviesReducer from "./topMoviesReducer";
import sideMenuReducer from "./sideMenuReducer";
import selectedContentReducer from "./selectedContentReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  movies: moviesReducer,
  newMovies: newMoviesReducer,
  topMovies: topMoviesReducer,
  showSideMenu: sideMenuReducer,
  selectedContent: selectedContentReducer
});
