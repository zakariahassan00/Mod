import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { getAllMovies, fetchingData } from "./../../actions";
import { allMoviesStyles } from "../allMovies/allMovesStyles";
import Grid from "@material-ui/core/Grid";
import Pagination from "./../common/pagination/pagination";
import Loader from "react-loader-spinner";
import MoviesGrid from "../allMovies/MoviesGrid";

class SearchMovies extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    const q = this.props.location.search.slice(3, -1);

    this.props.getAllMovies(1, q);
  }

  handlePageChange = page => {
    const { query } = this.state;
    this.props.fetchingData();
    this.props.getAllMovies(page, query);
    this.setState({ page });
  };

  render() {
    const { classes, movies } = this.props;
    const moviesLoaded = movies.loaded;
    return (
      <Grid container justify="center" className={classes.allMovies}>
        <section className={classes.list}>
          {moviesLoaded ? (
            <MoviesGrid movies={movies.data.movies} />
          ) : (
            <Loader type="Oval" color="#3f51b5" height={60} width={60} />
          )}
        </section>

        <Pagination
          itemsCount={movies.data.count}
          itemsPerpage={20}
          onPageChange={this.handlePageChange}
          currentPage={this.state.page}
        />
      </Grid>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default compose(
  withStyles(allMoviesStyles),
  connect(
    mapStateToProps,
    { getAllMovies, fetchingData }
  )
)(SearchMovies);
