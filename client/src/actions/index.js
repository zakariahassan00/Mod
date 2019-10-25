import axios from "axios";
import {
  FETCH_USER,
  FETCH_MOVIES,
  FETCH_NEW_MOVIES,
  TOGGLE_SIDE_BAR
} from "./types";

export const getAllMovies = () => async dispatch => {
  const movies = await axios.get("/api/movies/all");

  dispatch({ type: FETCH_MOVIES, payload: movies.data });
};

export const getNewMovies = () => async dispatch => {
  const movies = await axios.get("/api/movies/latest");

  dispatch({ type: FETCH_NEW_MOVIES, payload: movies.data });
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

export const toggleSideMenu = value => {
  return { type: TOGGLE_SIDE_BAR, payload: value };
};

export const addToWatchList = movie => async dispatch => {
  const updatedUser = await axios.post("/api/movies/watchlist", movie);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};

export const rateContent = content => async dispatch => {
  const updatedUser = await axios.post("/api/movies/rate", content);

  dispatch({ type: FETCH_USER, payload: updatedUser.data });
};
