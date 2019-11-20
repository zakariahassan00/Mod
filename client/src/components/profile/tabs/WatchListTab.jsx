import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Grid } from "@material-ui/core";
import { getWatchList, fetchingData } from "./../../../actions/index";
import Pagination from "../../common/Pagination";
import MoviesGrid from "../../allMovies/MoviesGrid";

class WatchListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getWatchList();
  }

  handlePageChange = page => {
    this.props.fetchingData();
    this.props.getWatchList(page);
    this.setState({ page });
  };

  render() {
    const { userWatchList } = this.props;
    const moviesLoaded = userWatchList.loaded;
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          {moviesLoaded ? (
            <MoviesGrid movies={userWatchList.data.items} />
          ) : (
            <div style={{ width: 60, margin: "auto" }}>
              <Loader type="Oval" color="#3f51b5" height={60} width={60} />
            </div>
          )}
        </Grid>

        <Grid item xs={11}>
          <Pagination
            itemsCount={userWatchList.data.count}
            itemsPerpage={20}
            onPageChange={this.handlePageChange}
            currentPage={this.state.page}
          />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ userWatchList }) {
  return { userWatchList };
}

export default connect(
  mapStateToProps,
  { getWatchList, fetchingData }
)(WatchListTab);
