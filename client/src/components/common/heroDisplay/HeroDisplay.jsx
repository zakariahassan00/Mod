import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import AddIcon from "@material-ui/icons/Add";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { heroDisplayStyles } from "./heroDisplayStyles";

const HeroDisplay = ({ classes, movie, history }) => {
  return (
    <div className={classes.hero}>
      <img className={classes.image} src={movie.backdrop_path} alt="" />
      <div className={classes.heroOverlay}></div>
      <div className={classes.heroContent}>
        <Grid container>
          <Hidden xsDown>
            <Grid item sm={4} lg={3} xl={2}>
              <Link to={`/show/${movie.id}`}>
                <Card className={classes.card} key={movie.id}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={movie.poster_path}
                      title={movie.title}
                    />
                  </CardActionArea>
                </Card>
              </Link>
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
            <Link to={`/show/${movie.id}`}>
              <Button variant="outlined" className={classes.button}>
                Play
              </Button>
            </Link>
            <Button
              variant="outlined"
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
