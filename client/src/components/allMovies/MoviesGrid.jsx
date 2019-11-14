import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import Slide from "@material-ui/core/Slide";
import MovieCard from "../common/card/MovieCard";
import Grid from "@material-ui/core/Grid";

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

const MoviesGrid = ({ classes, movies }) => {
  return (
    <div>
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
          <h1>Sorry, No Movies Found!</h1>
        )}
      </section>
    </div>
  );
};

export default compose(withStyles(styles))(MoviesGrid);
