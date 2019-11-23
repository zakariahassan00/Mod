import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Chip, Grid, withWidth } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import MovieCard from "../common/MovieCard";
import { heroDisplayStyles } from "./heroDisplayStyles";

const HeroDisplay = ({ classes, movie, width }) => {
  return (
    <div className={classes.hero}>
      <img className={classes.image} src={movie.backdrop_path} alt="" />
      <div className={classes.heroOverlay}></div>
      <div className={classes.heroContent}>
        <div className={classes.card}>
          {width === "xs" ? (
            <MovieCard sm content={movie} />
          ) : (
            <MovieCard content={movie} />
          )}
        </div>
        <div>
          <Typography
            className={classes.heroTitle}
            variant="h2"
            component="h2"
            gutterBottom
          >
            {movie.title}
          </Typography>
          <div>
            <div>
              <Rating
                name="half-rating"
                readOnly
                value={movie.vote_average * 0.5}
                precision={0.25}
                className={classes.rating}
              />
              <Chip label={movie.vote_average} className={classes.chip} />
            </div>
          </div>
          <Typography
            className={classes.heroOverview}
            variant="body1"
            gutterBottom
          >
            {movie.overview}
          </Typography>
        </div>
      </div>
    </div>
  );
};

HeroDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(heroDisplayStyles),
  withWidth()
)(HeroDisplay);
