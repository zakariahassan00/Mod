import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const style = theme => ({
  userActions: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    margin: "10px auto"
  },
  action: {
    alignSelf: "center",
    width: 35,
    height: 35,
    cursor: "pointer"
  },
  addToWatchList: {
    width: 35,
    height: 35,
    cursor: "pointer"
  },
  addToFavorites: {
    width: 35,
    height: 35,
    color: "#E50914",
    cursor: "pointer"
  },
  addToMyList: {
    width: 35,
    height: 35,
    color: "#1976d2",
    cursor: "pointer"
  },
  rate: {
    width: 35,
    height: 35,
    color: "#ffb400",
    cursor: "pointer"
  },
  success: {
    backgroundColor: "#43a047"
  }
});

class UserActions extends Component {
  state = {
    open: false,
    message: ""
  };

  addToFavorites = () => {
    this.setState({ message: "Succefully Added To Your Favorites!" });
    this.handleOpen();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { open, message } = this.state;
    return (
      <div className={classes.userActions}>
        <PlaylistAddIcon className={classes.addToWatchList} />
        <FavoriteBorderIcon
          className={classes.addToFavorites}
          onClick={this.addToFavorites}
        />
        <BookmarkIcon className={classes.addToMyList} />
        <StarIcon className={classes.rate} />

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default withStyles(style)(UserActions);
