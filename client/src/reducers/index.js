import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import moviesReducer from "./moviesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  form: reduxForm,
  movies: moviesReducer,
  auth: authReducer
});
