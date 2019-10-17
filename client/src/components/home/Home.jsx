import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getAllMovies, getNewMovies } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "../common/card/MovieCard";
import HeroDisplay from "./../common/heroDisplay";
import { homeStyles } from "./homeStyles";
import MoviesList from "../common/moviesList";
import MoviesCarousel from "../common/carousel";

// CARD !
import withWidth from "@material-ui/core/withWidth";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  state = {
    translate: 0,
    dimensions: {}
  };

  componentDidMount() {
    this.props.getNewMovies();

    // this.props.getAllMovies();
  }

  render() {
    const { newMovies, classes } = this.props;
    const randomMovie = newMovies[1] || {};

    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.landing}>
            <HeroDisplay movie={randomMovie} />
          </div>
        </Grid>

        <Grid item xs={11}>
          <div className={classes.moviesList}>
            <div className={classes.moviesListHeader}>In Theatre Now </div>
            <MoviesCarousel movies={newMovies} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ movies, newMovies }) {
  return { movies, newMovies };
}

export default compose(
  withWidth(),
  withStyles(homeStyles),
  connect(
    mapStateToProps,
    { getAllMovies, getNewMovies }
  )
)(Home);
