import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getNewMovies } from "../../actions";
import { withStyles, Grid, Slide } from "@material-ui/core";
import HeroDisplay from "../heroDisplay";
import Carousel from "../common/carousel";
import { homeStyles } from "./homeStyles";
import UpcomingMovies from "./Upcoming";

class Home extends Component {
  state = {
    randomIndex: {}
  };

  componentDidMount() {
    this.props.getNewMovies();
    const randomIndex = Math.floor(Math.random() * 20) || 0;
    this.setState({ randomIndex });
  }

  render() {
    const { newMovies, classes } = this.props;
    const { randomIndex } = this.state;
    const randomMovie = newMovies.data[randomIndex] || {};

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
              <div className={classes.moviesListHeader}>In Theatre Now</div>
              <Carousel data={newMovies.data} />
            </div>
          </Grid>

          <Grid item xs={11}>
            <div className={classes.moviesList}>
              <div className={classes.moviesListHeader}>Upcoming</div>
              <UpcomingMovies />
            </div>
          </Grid>
        </Grid>
      </Slide>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  newMovies: PropTypes.object.isRequired
};

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
