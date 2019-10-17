import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import AddIcon from "@material-ui/icons/Add";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { heroDisplayStyles } from "./heroDisplayStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const HeroDisplay = ({ classes, movie }) => {
  console.log(movie.genres);
  return (
    <div className={classes.hero} onScroll={() => console.log("scrolled")}>
      <img className={classes.image} src={movie.backdrop_path} alt="" />
      <div className={classes.heroOverlay}></div>
      <div className={classes.heroContent}>
        <Grid container justify="left">
          <Hidden xsDown>
            <Grid item sm={4} lg={3} xl={2}>
              <Card className={classes.card} key={movie.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={movie.poster_path}
                    title={movie.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Hidden>
          <Grid item sm={8} md={7} xl={5}>
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
              size="small"
            >
              My List
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(heroDisplayStyles)(HeroDisplay);
