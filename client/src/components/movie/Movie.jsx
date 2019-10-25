import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Chip } from "@material-ui/core";
import Rate from "../common/rate";
import { movie } from "./testMovie";
import { movieStyles } from "./movieStyles";
import MovieCard from "../common/card/MovieCard";
import Cast from "../common/cast";
import MoviesCarousel from "../common/carousel";
import Video from "../common/video";
import WatchList from "../common/userAction/WatchList";
import UserRate from "../common/userAction/UserRate";

class Movie extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.movie}>
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
                    {/* <StarIcon className={classes.star} /> */}
                    <Chip label={movie.vote_average} className={classes.chip} />
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
                      <span key={genre} className={classes.genre}>
                        {genre}
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
              </div>
              <div className={classes.movieDescription}>
                <div className={classes.poster}>
                  <MovieCard item={movie} />
                </div>
                <div className={classes.movieStoryLine}>
                  <p>{movie.overview}</p>
                  <p>
                    Director :{" "}
                    {movie.crew.map(member => (
                      <span className={classes.credits} key={member.id}>
                        {member.job === "Director" && member.name}
                      </span>
                    ))}
                  </p>
                  <p>
                    Writer :{" "}
                    {movie.crew.map(
                      member =>
                        member.department === "Writing" && (
                          <span className={classes.credits} key={member.id}>
                            {member.name}
                          </span>
                        )
                    )}
                  </p>
                </div>
                <div>
                  {/* <UserActions /> */}
                  <WatchList movieId={movie.id} />
                </div>
                <div>
                  <UserRate movieId={movie.id} />
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
                  <MoviesCarousel movies={movie.similar} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(movieStyles)(Movie);
