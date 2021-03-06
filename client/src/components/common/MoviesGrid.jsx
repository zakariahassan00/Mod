import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Slide, Typography } from "@material-ui/core";
import MovieCard from "./MovieCard";

const styles = theme => ({
  moviesGrid: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  movie: {
    margin: "auto",
    width: 210,
    height: 320,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 240
    }
  }
});

const MoviesGrid = React.memo(function MoviesGrid({ classes, movies }) {
  return (
    <section className={classes.moviesGrid}>
      {movies.length > 0 ? (
        movies.map(movie => {
          return (
            <Grid item xs={6} sm={3} key={movie.id}>
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div className={classes.movie}>
                  <MovieCard content={movie} />
                </div>
              </Slide>
            </Grid>
          );
        })
      ) : (
        <Typography variant="h5" align="center">
          No Movies Found!
        </Typography>
      )}
    </section>
  );
});

MovieCard.propTypes = {
  classes: PropTypes.object,
  movies: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default withStyles(styles)(MoviesGrid);
