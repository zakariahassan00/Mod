import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getNewMovies } from "../../actions";
import { withStyles, Grid, Slide } from "@material-ui/core";
import HeroDisplay from "./../common/heroDisplay";
import MoviesCarousel from "../common/carousel";
import { homeStyles } from "./homeStyles";

class Home extends Component {
  componentDidMount() {
    this.props.getNewMovies();
  }

  render() {
    const { newMovies, classes } = this.props;
    const moviesLoaded = newMovies.loaded;
    const randomIndex = Math.floor(Math.random() * newMovies.data.length) || 0;
    const randomMovie = newMovies.data[1] || {};

    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Grid container justify="center">
          <Grid item xs={12}>
            <div className={classes.landing}>
              <HeroDisplay movie={randomMovie} />
            </div>
          </Grid>

          <Grid item xs={11}>
            <div className={classes.moviesList}>
              <div className={classes.moviesListHeader}>In Theatre Now </div>
              <MoviesCarousel movies={newMovies.data} />
            </div>
          </Grid>

          <Grid item xs={11}>
            <div className={classes.moviesList}>
              <div className={classes.moviesListHeader}>Drama </div>
              <MoviesCarousel movies={newMovies.data} />
            </div>
          </Grid>

          <Grid item xs={11}>
            <div className={classes.moviesList}>
              <div className={classes.moviesListHeader}>Action </div>
              <MoviesCarousel movies={newMovies.data} />
            </div>
          </Grid>
        </Grid>
      </Slide>
    );
  }
}

function mapStateToProps({ newMovies }) {
  return { newMovies };
}

export default compose(
  withStyles(homeStyles),
  connect(
    mapStateToProps,
    { getNewMovies }
  )
)(Home);
