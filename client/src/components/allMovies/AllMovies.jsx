import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { getAllMovies, fetchingData } from "./../../actions";
// import MovieCard from "../common/card/MovieCard";
import { allMoviesStyles } from "./allMovesStyles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../common/searchBar/SearchBar";
import Pagination from "./../common/pagination/pagination";
import Loader from "react-loader-spinner";
import MoviesGrid from "./MoviesGrid";

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
)(AllMovies);
