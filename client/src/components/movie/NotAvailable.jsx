import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const Styles = {
  root: {
    width: "100vw",
    height: "50vh",
    color: "#fff",
    padding: "200px 50px"
  }
};

const NotAvailable = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        Sorry, this content isn't available right now
      </Typography>
    </div>
  );
};

export default withStyles(Styles)(NotAvailable);
