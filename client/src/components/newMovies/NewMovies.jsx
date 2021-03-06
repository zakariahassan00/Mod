import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import { withStyles, Grid, Slide } from "@material-ui/core";
import { getNewMovies } from "./../../actions/index";
import MoviesGrid from "../common/MoviesGrid";

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
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid container justify="center" className={classes.newMovies}>
          {moviesLoaded ? <MoviesGrid movies={movies.data} /> : <Loading />}
        </Grid>
      </Slide>
    );
  }
}

NewMovies.propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  getNewMovies: PropTypes.func.isRequired
};

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
