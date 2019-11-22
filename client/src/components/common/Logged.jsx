import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, withStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Styles = {
  root: {
    width: "100vw",
    height: "50vh",
    color: "#fff",
    padding: "200px 50px 50px",
    textAlign: "center"
  },
  back: {
    margin: 15
  }
};

const Logged = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        You Are Logged In
      </Typography>
      <Link to="/">
        <ArrowBackIcon className={classes.back} />
      </Link>
    </div>
  );
};

Logged.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Logged);
