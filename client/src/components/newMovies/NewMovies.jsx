import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { withStyles, Grid } from "@material-ui/core";
import { getNewMovies } from "./../../actions/index";
import MoviesGrid from "../allMovies/MoviesGrid";

const styles = theme => ({
  newMovies: {
    width: "100%",
    height: "100%",
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      marginTop: 35
    }
  }
});

class NewMovies extends Component {
  state = {};

  componentDidMount() {
    this.props.getNewMovies();
  }

  render() {
    const { classes, movies } = this.props;
    const moviesLoaded = movies.loaded;
    return (
      <Grid container justify="center" className={classes.newMovies}>
        {moviesLoaded ? (
          <MoviesGrid movies={movies.data} />
        ) : (
          <Loader type="Oval" color="#3f51b5" height={60} width={60} />
        )}
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
