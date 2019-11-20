import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./user/authReducer";
import watchListReducer from "./user/watchListReducer";
import rateListReducer from "./user/rateListReducer";
import favoritesListReducer from "./user/favoritesListReducer";
import moviesReducer from "./movies/moviesReducer";
import newMoviesReducer from "./movies/newMoviesReducer";
import topMoviesReducer from "./movies/topMoviesReducer";
import selectedMovieReducer from "./movies/selectedMovieReducer";

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
