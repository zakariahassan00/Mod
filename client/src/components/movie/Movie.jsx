import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import Loading from "../common/Loading";
import { getMovie, fetchingData } from "../../actions";
import { Grid, Typography, withStyles } from "@material-ui/core";
import MovieInfo from "./MovieInfo";
import MovieOverview from "./MovieOverview";
import Cast from "./Cast";
import Rate from "../common/Rate";
import UserRate from "../common/userAction/UserRate";
import SimilarMovies from "./SimilarMovies";
import { movieStyles } from "./movieStyles";

class Movie extends PureComponent {
  state = {};

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.fetchingData();
    this.props.getMovie(movieId);
  }

  componentDidUpdate(prevProps, prevState) {
    const movieId = this.props.match.params.id;

    if (prevProps.match.params.id !== movieId) {
      this.props.fetchingData();
      this.props.getMovie(movieId);
    }
  }

  render() {
    const { classes, movie } = this.props;
    const loaded = movie.loaded;

    return (
      <div className={classes.movie}>
        {loaded ? (
          <Grid container justify="center">
            <Grid item xs={12}>
              <MovieInfo movie={movie.data} />
            </Grid>

            <Grid item xs={12} md={10}>
              <div className={classes.movieData}>
                <div className={classes.movieRates}>
                  <Rate value={movie.data.vote_average} />
                  <Rate value={movie.data.user_rate} red />
                  <UserRate contentId={movie.data.id} />
                </div>

                <div className={classes.movieOverview}>
                  <MovieOverview movie={movie.data} />
                </div>

                <div className={classes.movieCast}>
                  <Typography align="center" variant="h5" gutterBottom>
                    Cast
                  </Typography>
                  <Cast cast={movie.data.cast} />
                </div>

                <div className={classes.similarMovies}>
                  <Typography align="center" variant="h5" gutterBottom>
                    More Like This
                  </Typography>
                  <div className={classes.similarMoviesList}>
                    <SimilarMovies contentId={movie.data.id} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

function mapStateToProps({ selectedMovie }) {
  return { movie: selectedMovie };
}

export default compose(
  withStyles(movieStyles),
  connect(
    mapStateToProps,
    { getMovie, fetchingData }
  )
)(Movie);
