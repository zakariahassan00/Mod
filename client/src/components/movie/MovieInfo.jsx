import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { movieStyles } from "./movieStyles";
import Video from "./Video";
import { Typography, Chip } from "@material-ui/core";

const MovieInfo = React.memo(function MovieInfo({ classes, movie }) {
  return (
    <div className={classes.movieInfo}>
      <div className={classes.overlay}></div>
      <img className={classes.img} src={movie.backdrop_path} alt="" />
      <div className={classes.movieDetails}>
        <div>
          <span className={classes.releaseDate}>{movie.release_date}</span>
          <span>
            <Chip label={movie.vote_average} className={classes.chip} />
          </span>
        </div>
        <div>
          <Typography className={classes.title} variant="h3" gutterBottom>
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

        {movie.video[0] && <Video video={movie.video[0]} title={movie.title} />}
      </div>
    </div>
  );
});

MovieInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withStyles(movieStyles)(MovieInfo);
