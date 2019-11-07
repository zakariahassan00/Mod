import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  card: {
    margin: 5,
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

const MovieCard = ({ classes, content, sm }) => {
  return (
    <Card className={sm ? classes.smCard : classes.card}>
      <CardActionArea>
        <CardMedia
          className={sm ? classes.smMedia : classes.media}
          image={"/"}
          title={"...Loading"}
        />
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(MovieCard);
