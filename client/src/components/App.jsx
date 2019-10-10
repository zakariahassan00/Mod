import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import "./app.css";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
