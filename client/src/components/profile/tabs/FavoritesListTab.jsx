import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Grid } from "@material-ui/core";
import { getFavoritesList, fetchingData } from "./../../../actions/index";
import Pagination from "../../common/pagination/pagination";
import MoviesGrid from "../../allMovies/MoviesGrid";

class FavoritesListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getFavoritesList();
  }

  handlePageChange = page => {
    this.props.fetchingData();
    this.props.getFavoritesList(page);
    this.setState({ page });
  };

  render() {
    const { userFavoritesList } = this.props;
    const moviesLoaded = userFavoritesList.loaded;
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          {moviesLoaded ? (
            <MoviesGrid movies={userFavoritesList.data.items} />
          ) : (
            <div style={{ width: 60, margin: "auto" }}>
              <Loader type="Oval" color="#3f51b5" height={60} width={60} />
            </div>
          )}
        </Grid>

        <Grid item xs={11}>
          <Pagination
            itemsCount={userFavoritesList.data.count}
            itemsPerpage={20}
            onPageChange={this.handlePageChange}
            currentPage={this.state.page}
          />
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ userFavoritesList }) {
  return { userFavoritesList };
}

export default connect(
  mapStateToProps,
  { getFavoritesList, fetchingData }
)(FavoritesListTab);
