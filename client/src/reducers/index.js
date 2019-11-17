import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";
import newMoviesReducer from "./newMoviesReducer";
import topMoviesReducer from "./topMoviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import userListReducer from "./userListReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  userLists: userListReducer,
  movies: moviesReducer,
  newMovies: newMoviesReducer,
  topMovies: topMoviesReducer,
  selectedMovie: selectedMovieReducer
});
