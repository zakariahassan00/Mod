import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Router from "./Router";
import "./app.css";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Router />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
