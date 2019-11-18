import React from "react";
import { Route } from "react-router-dom";
import Login from "./login";
import Register from "./register/Register";
import Home from "./home";
import Movie from "./movie";
import AllMovies from "./allMovies";
import Profile from "./profile";
import TopMovies from "./topMovies/TopMovies";
import NewMovies from "./newMovies/NewMovies";
import SearchResults from "./searchResults/SearchResults";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/all" component={AllMovies} />
      <Route path="/top" component={TopMovies} />
      <Route path="/new" component={NewMovies} />
      <Route path="/search" component={SearchResults} />
      <Route path="/show/:id" component={Movie} />
    </div>
  );
};

export default Router;
