import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withStyles, Slide, Grid } from "@material-ui/core";
import { getTopMovies, fetchingData } from "./../../actions/index";
import MoviesGrid from "../allMovies/MoviesGrid";
import Pagination from "../common/Pagination";
import Loading from "../common/Loading";

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
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid container justify="center" className={classes.topRated}>
          <section className={classes.list}>
            {moviesLoaded ? (
              <MoviesGrid movies={topMovies.data.movies} />
            ) : (
              <Loading />
            )}
          </section>

          <Pagination
            itemsCount={topMovies.data.count}
            itemsPerpage={20}
            onPageChange={this.handlePageChange}
            currentPage={this.state.page}
          />
        </Grid>
      </Slide>
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
