import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getAllMovies, getNewMovies } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeroDisplay from "./../common/heroDisplay";
import { homeStyles } from "./homeStyles";
import MoviesCarousel from "../common/carousel";

// CARD !
import withWidth from "@material-ui/core/withWidth";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.getNewMovies();
  }

  render() {
    const { newMovies, classes } = this.props;
    const randomMovie = newMovies[9] || {};

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
            {/* <MoviesCarousel movies={newMovies} /> */}
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
