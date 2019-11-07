import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getAllMovies } from "./../actions/index";
import Login from "./login";
import Home from "./home";
import Header from "./header";
import Movie from "./movie";
import "./app.css";
import Footer from "./footer";
import AllMovies from "./allMovies";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/show/:id" component={Movie} />
          <Route path="/all" component={AllMovies} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
