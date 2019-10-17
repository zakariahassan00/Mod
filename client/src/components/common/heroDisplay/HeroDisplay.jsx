import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { heroDisplayStyles } from "./heroDisplayStyles";

const HeroDisplay = ({ classes, movie }) => {
  return (
    <div className={classes.hero}>
      <img className={classes.image} src={movie.backdrop_path} alt="" />
      <div className={classes.heroOverlay}></div>
      <div className={classes.heroContent}>
        <Typography
          className={classes.heroTitle}
          variant="h2"
          component="h2"
          gutterBottom
        >
          {movie.title}
        </Typography>
        <Typography
          className={classes.heroOverview}
          variant="body1"
          gutterBottom
        >
          {movie.overview}
        </Typography>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={classes.button}
        >
          Play
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          My List
        </Button>
      </div>
    </div>
  );
};

export default withStyles(heroDisplayStyles)(HeroDisplay);
