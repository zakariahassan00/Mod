import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";

const styles = {
  loader: {
    width: "100vw",
    height: "100vh"
  },
  spinner: {
    width: 60,
    height: 60,
    margin: "auto",
    position: "relative",
    top: "50%"
  }
};

const Loading = ({ classes }) => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}>
        <Loader type="Oval" color="#3f51b5" height={60} width={60} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Loading);
