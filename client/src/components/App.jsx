import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Header from "./header";
import "./app.css";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
