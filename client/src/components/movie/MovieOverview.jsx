import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { movieStyles } from "./movieStyles";
import MovieCard from "../common/card/MovieCard";
import WatchList from "../common/userAction/WatchList";
import AddToFavorites from "../common/userAction/AddToFavorites";

const MovieOverview = ({ classes, movie }) => {
  return (
    <Fragment>
      <div className={classes.poster}>
        <MovieCard content={movie} />
      </div>
      <div className={classes.movieStoryLine}>
        <p>{movie.overview}</p>
        <p>
          Director :{" "}
          {movie.crew.map(member => (
            <span className={classes.credits} key={member.credit_id}>
              {member.job === "Director" && member.name}
            </span>
          ))}
        </p>
        <p>
          Writer :{" "}
          {movie.crew.map(
            member =>
              member.department === "Writing" && (
                <span className={classes.credits} key={member.credit_id}>
                  {member.name}
                </span>
              )
          )}
        </p>
      </div>
      <div>
        <WatchList movieId={movie.id} />
        <AddToFavorites movieId={movie.id} />
      </div>
    </Fragment>
  );
};

export default withStyles(movieStyles)(MovieOverview);
