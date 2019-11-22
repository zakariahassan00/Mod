import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { getAllMovies, fetchingData } from "./../../actions";
import { allMoviesStyles } from "./allMovesStyles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../common/SearchBar";
import Pagination from "./../common/Pagination";
import Loading from "../common/Loading";
import MoviesGrid from "../common/MoviesGrid";

class AllMovies extends Component {
  state = {
    page: 1,
    query: ""
  };

  componentDidMount() {
    this.props.getAllMovies();
  }

  handlePageChange = page => {
    const { query } = this.state;
    this.props.fetchingData();
    this.props.getAllMovies(page, query);
    this.setState({ page });
  };

  handleQueryChange = query => {
    this.setState({ query, page: 1 });
    this.props.fetchingData();
    this.props.getAllMovies(1, query);
  };

  render() {
    const { classes, movies } = this.props;
    const moviesLoaded = movies.loaded;
    return (
      <Grid container justify="center" className={classes.allMovies}>
        <Grid item xs={12}>
          <SearchBar onQueryChange={this.handleQueryChange} />
        </Grid>

        <section className={classes.list}>
          {moviesLoaded ? (
            <MoviesGrid movies={movies.data.movies} />
          ) : (
            <Loading />
          )}
        </section>

        <Pagination
          itemsCount={movies.data.count}
          onPageChange={this.handlePageChange}
          currentPage={this.state.page}
        />
      </Grid>
    );
  }
}

AllMovies.propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.PropTypes.object.isRequired,
  getAllMovies: PropTypes.func.isRequired,
  fetchingData: PropTypes.func.isRequired
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default compose(
  withStyles(allMoviesStyles),
  connect(
    mapStateToProps,
    { getAllMovies, fetchingData }
  )
)(AllMovies);
