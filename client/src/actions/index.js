import axios from "axios";
import {
  FETCH_USER,
  FETCH_MOVIES,
  FETCH_NEW_MOVIES,
  FETCH_TOP_MOVIES,
  FETCHING_MOVIES,
  FETCH_MOVIE,
  FETCH_WATCH_LIST,
  FETCH_FAVORITES_LIST,
  FETCH_RATE_LIST
} from "./types";

// Movies Actions
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

// User Actions
export const signIn = values => async dispatch => {
  const user = await axios.post("/api/user/login", values);

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const signUp = values => async dispatch => {
  const user = await axios.post("/api/user/register", values);

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const getUser = () => async dispatch => {
  const user = await axios.get("/api/cu");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const addToWatchList = movie => async dispatch => {
  const updatedUser = await axios.post("/api/user/watchlist", movie);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const rateContent = content => async dispatch => {
  const updatedUser = await axios.post("/api/user/rate", content);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const toggleFavorites = content => async dispatch => {
  const updatedUser = await axios.post("/api/user/favorites", content);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const getWatchList = (page = 1) => async dispatch => {
  const userWatchList = await axios.get(`/api/user/watchlist?page=${page}`);

  dispatch({ type: FETCH_WATCH_LIST, payload: userWatchList.data });
};

export const getFavoritesList = (page = 1) => async dispatch => {
  const userFavoritesList = await axios.get(`/api/user/favorites?page=${page}`);

  dispatch({ type: FETCH_FAVORITES_LIST, payload: userFavoritesList.data });
};

export const getRateList = (page = 1) => async dispatch => {
  const userRateList = await axios.get(`/api/user/ratelist?page=${page}`);

  dispatch({ type: FETCH_RATE_LIST, payload: userRateList.data });
};
