import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getAllMovies, getNewMovies } from "./../../actions";
import { compose } from "recompose";
import MovieCard from "../common/card/MovieCard";
import { allMoviesStyles } from "./allMovesStyles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../common/searchBar/SearchBar";
import Pagination from "./../common/pagination/pagination";

class AllMovies extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getAllMovies();
  }

  handlePageChange = page => {
    this.props.getAllMovies(page);
    this.setState({ page });
  };

  render() {
    const { classes, movies } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.allMovies}
      >
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <section className={classes.list}>
          {movies.map(movie => {
            return (
              <Grid item xs={3}>
                <MovieCard content={movie} key={movie.id} />
              </Grid>
            );
          })}
        </section>
        <Pagination
          itemsCount={480}
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
    { getAllMovies, getNewMovies }
  )
)(AllMovies);
