import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  card: {
    margin: "auto",
    overflow: "hidden",
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 140
    }
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 210
    }
  },
  smCard: {
    margin: "10px auto",
    overflow: "hidden",
    width: 100,
    [theme.breakpoints.down("sm")]: {
      width: 80
    }
  },
  smMedia: {
    height: 150,
    [theme.breakpoints.down("sm")]: {
      height: 120
    }
  }
});

const MovieCard = ({ classes, item, sm }) => {
  return (
    <Card className={sm ? classes.smCard : classes.card} key={item.id}>
      <CardActionArea>
        <CardMedia
          className={sm ? classes.smMedia : classes.media}
          image={item.poster_path || item.profile_path || " "}
          title={item.title || item.name}
        />
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(MovieCard);
