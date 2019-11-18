import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";
import newMoviesReducer from "./newMoviesReducer";
import topMoviesReducer from "./topMoviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import watchListReducer from "./watchListReducer";
import rateListReducer from "./rateListReducer";
import favoritesListReducer from "./favoritesListReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  userWatchList: watchListReducer,
  userRateList: rateListReducer,
  userFavoritesList: favoritesListReducer,
  movies: moviesReducer,
  newMovies: newMoviesReducer,
  topMovies: topMoviesReducer,
  selectedMovie: selectedMovieReducer
});
