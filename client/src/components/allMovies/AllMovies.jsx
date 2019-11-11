import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { getAllMovies } from "./../../actions";
import MovieCard from "../common/card/MovieCard";
import { allMoviesStyles } from "./allMovesStyles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../common/searchBar/SearchBar";
import Pagination from "./../common/pagination/pagination";
import Slide from "@material-ui/core/Slide";
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
    this.props.getAllMovies(page, query);
    this.setState({ page });
  };

  handleQueryChange = query => {
    this.setState({ query, page: 1 });
    this.props.getAllMovies(1, query);
  };

  render() {
    const { classes, movies } = this.props;
    return (
      <Grid container justify="center" className={classes.allMovies}>
        <Grid item xs={12}>
          <SearchBar onQueryChange={this.handleQueryChange} />
        </Grid>

        <section className={classes.list}>
          <MoviesGrid movies={movies.items} />
        </section>

        <Pagination
          itemsCount={movies.count}
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
    { getAllMovies }
  )
)(AllMovies);
