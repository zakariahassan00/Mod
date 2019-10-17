import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grow from "@material-ui/core/Grow";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";

// {`${movie.poster_path}`}

const styles = theme => ({
  card: {
    maxWidth: 300,
    margin: "20px auto"
  },
  media: {
    height: 300,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

const MovieCard = ({ classes, movie }) => {
  return (
    <Grow in={true} timeout={2000}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={movie.poster_path}
          title={movie.title}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {movie.title}
          </IconButton>
        </CardActions>
      </Card>
    </Grow>
  );
};

export default withStyles(styles)(MovieCard);
