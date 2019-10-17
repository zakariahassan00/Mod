import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { moviesListStyles } from "./moviesListStyles";

const MoviesList = ({ classes, movies }) => {
  return <div className={classes.root}>Hello FCKKKKK</div>;
};

export default withStyles(moviesListStyles)(MoviesList);
