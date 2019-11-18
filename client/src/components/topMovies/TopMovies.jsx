import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { getTopMovies, fetchingData } from "./../../actions/index";
import MoviesGrid from "../allMovies/MoviesGrid";
import Pagination from "../common/pagination/pagination";
import Loader from "react-loader-spinner";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  topRated: {
    width: "100%",
    height: "100%",
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      marginTop: 35
    }
  },
  list: {
    width: "100%",
    padding: 10,
    minHeight: "calc(100vh - 210px)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    color: "#fff"
  }
});

class TopMovies extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getTopMovies();
  }

  handlePageChange = page => {
    this.props.fetchingData();
    this.props.getTopMovies(page);
    this.setState({ page });
  };

  render() {
    const { classes, topMovies } = this.props;
    const moviesLoaded = topMovies.loaded;
    return (
      <Grid container justify="center" className={classes.topRated}>
        <section className={classes.list}>
          {moviesLoaded ? (
            <MoviesGrid movies={topMovies.data.movies} />
          ) : (
            <Loader type="Oval" color="#3f51b5" height={60} width={60} />
          )}
        </section>

        <Pagination
          itemsCount={topMovies.data.count}
          itemsPerpage={20}
          onPageChange={this.handlePageChange}
          currentPage={this.state.page}
        />
      </Grid>
    );
  }
}

function mapStateToProps({ topMovies }) {
  return { topMovies };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getTopMovies, fetchingData }
  )
)(TopMovies);
