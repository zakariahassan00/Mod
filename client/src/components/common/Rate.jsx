import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  rate: {
    width: "35%",
    textAlign: "center",
    alignSelf: "center"
  },
  rateValue: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 22
    }
  },
  red: {
    color: "#E50914"
  },
  rateStars: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  }
});

const Rate = ({ classes, value, red }) => {
  return (
    <div className={classes.rate}>
      <Typography variant="h3" display="inline" className={classes.rateValue}>
        {value || 0}
      </Typography>
      / <span style={{ color: "#808080" }}>10</span>
      <div>
        <Rating
          name="half-rating"
          value={value * 0.5}
          precision={0.25}
          className={(red && classes.red, classes.rateStars)}
          readOnly
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Rate);
