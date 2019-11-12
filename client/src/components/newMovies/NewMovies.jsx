import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getNewMovies } from "./../../actions/index";
import MoviesGrid from "../allMovies/MoviesGrid";
import SearchBar from "../common/searchBar/SearchBar";
import { Grid } from "@material-ui/core";

const styles = {
  newMovies: {
    width: "100%",
    height: "100%",
    marginTop: 120
  }
};

class NewMovies extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getNewMovies();
  }

  render() {
    const { classes, movies } = this.props;
    return (
      <Grid container className={classes.newMovies}>
        <MoviesGrid movies={movies} />
      </Grid>
    );
  }
}

function mapStateToProps({ newMovies }) {
  return { movies: newMovies };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getNewMovies }
  )
)(NewMovies);
