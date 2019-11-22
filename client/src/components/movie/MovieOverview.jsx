import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { movieStyles } from "./movieStyles";
import MovieCard from "../common/MovieCard";
import WatchList from "../common/userAction/WatchList";
import AddToFavorites from "../common/userAction/AddToFavorites";
import { Typography } from "@material-ui/core";

const MovieOverview = React.memo(function MovieOverview({ classes, movie }) {
  return (
    <Fragment>
      <div className={classes.section1}>
        <div className={classes.subSection1}>
          <MovieCard content={movie} />
        </div>
        <div className={classes.subSection2}>
          <WatchList movieId={movie.id} />
          <AddToFavorites movieId={movie.id} />
        </div>
      </div>

      <div className={classes.movieStoryLine}>
        <div>
          <div>{movie.overview}</div>
        </div>

        <div style={{ marginTop: "35px" }}>
          <div>
            Director :{" "}
            {movie.crew.map(
              member =>
                member.job === "Director" && (
                  <Typography
                    variant="subtitle1"
                    className={classes.credits}
                    display="inline"
                    key={member.credit_id}
                    gutterBottom
                  >
                    {member.name},
                  </Typography>
                )
            )}
          </div>
          <div>
            Writer :{" "}
            {movie.crew.map(
              member =>
                member.department === "Writing" && (
                  <Typography
                    variant="subtitle1"
                    className={classes.credits}
                    display="inline"
                    key={member.credit_id}
                    gutterBottom
                  >
                    {member.name},
                  </Typography>
                )
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

MovieOverview.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withStyles(movieStyles)(MovieOverview);
