import axios from "axios";
import {
  FETCH_USER,
  FETCH_MOVIES,
  FETCH_NEW_MOVIES,
  FETCH_TOP_MOVIES,
  FETCHING_MOVIES,
  FETCH_MOVIE,
  SET_CONTENT
} from "./types";

export const getAllMovies = (page = 1, query = "") => async dispatch => {
  const movies = await axios.get(
    `/api/movies/all?page=${page}&searchQuery=${query}`
  );

  dispatch({ type: FETCH_MOVIES, payload: movies.data });
};

export const getNewMovies = () => async dispatch => {
  const movies = await axios.get("/api/movies/latest");

  dispatch({ type: FETCH_NEW_MOVIES, payload: movies.data });
};

export const getTopMovies = (page = 1) => async dispatch => {
  const movies = await axios.get(`/api/movies/top?page=${page}`);

  dispatch({ type: FETCH_TOP_MOVIES, payload: movies.data });
};

export const getMovie = id => async dispatch => {
  const movie = await axios.get(`/api/movies/${id}`);

  dispatch({ type: FETCH_MOVIE, payload: movie.data });
};

export const fetchingData = () => {
  console.log("Fetching...");
  return { type: FETCHING_MOVIES, payload: false };
};

export const getUser = () => async dispatch => {
  const user = await axios.get("/api/cu");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const signIn = values => async dispatch => {
  const user = await axios.post("/api/login", values);

  console.log(user);
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const addToWatchList = movie => async dispatch => {
  const updatedUser = await axios.post("/api/movies/watchlist", movie);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const rateContent = content => async dispatch => {
  const updatedUser = await axios.post("/api/movies/rate", content);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const toggleFavorites = content => async dispatch => {
  const updatedUser = await axios.post("/api/movies/favorites", content);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const setCurrentContent = content => {
  // save the current Movie/Tv Show on redux to be accessable to all app!

  return { type: SET_CONTENT, payload: content };
};
