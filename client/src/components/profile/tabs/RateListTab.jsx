import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Fragment } from "react";
import Loader from "react-loader-spinner";
import { getRateList, fetchingData } from "./../../../actions/index";
import Pagination from "../../common/pagination/pagination";
import { Grid, withStyles, Typography } from "@material-ui/core";
import MovieCard from "../../common/card/MovieCard";
import UserRate from "../../common/userAction/UserRate";

const styles = theme => ({
  moviesListItem: {
    width: "100%",
    padding: "10px 30px",
    display: "flex",
    backgroundColor: "#000",
    borderRadius: 8,
    flexWrap: "wrap"
  },
  title: {
    width: "100%"
  }
});

class RateListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getRateList();
  }

  handlePageChange = page => {
    this.props.fetchingData();
    this.props.getRateList(page);
    this.setState({ page });
  };

  render() {
    const { classes, userRateList } = this.props;
    const moviesLoaded = userRateList.loaded;
    return (
      <Fragment>
        <section>
          {moviesLoaded ? (
            <Grid container justify="center" spacing={6}>
              {userRateList.data.items.map(movie => {
                return (
                  <Grid item xs={12} md={5} key={movie.item.id}>
                    <div className={classes.moviesListItem}>
                      <Typography
                        align="center"
                        variant="h5"
                        className={classes.title}
                      >
                        {movie.item.title}
                      </Typography>
                      <MovieCard sm content={movie.item} />
                      <UserRate contentId={movie.item.id} />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div style={{ width: 60, margin: "auto" }}>
              <Loader type="Oval" color="#3f51b5" height={60} width={60} />
            </div>
          )}
        </section>

        <Pagination
          itemsCount={userRateList.data.count}
          itemsPerpage={20}
          onPageChange={this.handlePageChange}
          currentPage={this.state.page}
        />
      </Fragment>
    );
  }
}

function mapStateToProps({ userRateList }) {
  return { userRateList };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getRateList, fetchingData }
  )
)(RateListTab);
