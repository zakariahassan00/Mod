import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Grid, Typography, Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Rate from "../common/rate";
import MovieCard from "../common/card/MovieCard";
import Cast from "../common/cast";
import WatchList from "../common/userAction/WatchList";
import UserRate from "../common/userAction/UserRate";
import Video from "../common/video";
import RelativeToContent from "../common/relativeToContent";
import AddToFavorites from "../common/userAction/AddToFavorites";
import { movieStyles } from "./movieStyles";
import axios from "axios";

class Movie extends Component {
  state = {};

  async componentDidMount() {
    const movieId = this.props.match.params.id;

    const movie = await axios.get(`/api/movies/${movieId}`);
    this.setState({ movie: movie.data });
  }

  render() {
    const { classes } = this.props;
    const { movie } = this.state;

    return (
      <div className={classes.movie}>
        {movie && (
          <Grid container justify="center">
            <Grid item xs={12}>
              <div className={classes.video}>
                <div className={classes.overlay}></div>
                <img className={classes.img} src={movie.backdrop_path} alt="" />
                <div className={classes.movieOverview}>
                  <div>
                    <span className={classes.releaseDate}>
                      {movie.release_date}
                    </span>
                    <span className={classes.rate}>
                      <Chip
                        label={movie.vote_average}
                        className={classes.chip}
                      />
                    </span>
                  </div>
                  <div className={classes.title}>
                    <Typography variant="h3" gutterBottom>
                      {movie.title}
                    </Typography>
                  </div>
                  <div>
                    <span className={classes.duration}>{movie.runtime}Min</span>
                    <span className={classes.genres}>
                      {movie.genres.map(genre => (
                        <span key={genre.id} className={classes.genre}>
                          {genre.name}
                        </span>
                      ))}
                    </span>
                  </div>
                  <Video movie={movie} />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={10}>
              <div className={classes.movieData}>
                <div className={classes.movieInfoHeader}>
                  <Rate value={movie.vote_average} />
                  <Rate value={movie.user_rate} red />
                  <UserRate contentId={movie.id} />
                </div>
                <div className={classes.movieDescription}>
                  <div className={classes.poster}>
                    <MovieCard content={movie} />
                  </div>
                  <div className={classes.movieStoryLine}>
                    <p>{movie.overview}</p>
                    <p>
                      Director :{" "}
                      {movie.crew.map(member => (
                        <span
                          className={classes.credits}
                          key={member.credit_id}
                        >
                          {member.job === "Director" && member.name}
                        </span>
                      ))}
                    </p>
                    <p>
                      Writer :{" "}
                      {movie.crew.map(
                        member =>
                          member.department === "Writing" && (
                            <span
                              className={classes.credits}
                              key={member.credit_id}
                            >
                              {member.name}
                            </span>
                          )
                      )}
                    </p>
                  </div>
                  <div>
                    {/* <UserActions /> */}
                    <WatchList movieId={movie.id} />
                    <AddToFavorites movieId={movie.id} />
                  </div>
                </div>
                <div className={classes.movieCast}>
                  <Typography align="center" variant="h5" gutterBottom>
                    Cast
                  </Typography>
                  <Cast cast={movie.cast} />
                </div>
                <div className={classes.similarMovies}>
                  <Typography align="center" variant="h5" gutterBottom>
                    More Like This
                  </Typography>
                  <div className={classes.similarMoviesList}>
                    <RelativeToContent contentId={movie.id} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

function mapStateToProps({ selectedContent }) {
  return { movie: selectedContent };
}

export default compose(
  withStyles(movieStyles),
  connect(mapStateToProps)
)(Movie);
