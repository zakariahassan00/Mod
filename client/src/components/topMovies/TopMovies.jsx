import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { getTopMovies } from "./../../actions/index";
import MoviesGrid from "../allMovies/MoviesGrid";
import Pagination from "../common/pagination/pagination";

const styles = theme => ({
  topRated: {
    width: "100%",
    height: "100%",
    marginTop: 120
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
    this.props.getTopMovies(page);
    this.setState({ page });
  };

  render() {
    const { classes, topMovies } = this.props;
    return (
      <div className={classes.topRated}>
        <MoviesGrid movies={topMovies.items} />

        <Pagination
          itemsCount={topMovies.count}
          itemsPerpage={20}
          onPageChange={this.handlePageChange}
          currentPage={this.state.page}
        />
      </div>
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
    { getTopMovies }
  )
)(TopMovies);
