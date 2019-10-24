import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { addToWatchList } from "../../../actions";
import { withStyles } from "@material-ui/core/styles";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DoneIcon from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  watchlist: {
    textAlign: "center"
  },
  button: {
    textTransform: "capitalize",
    margin: "auto"
  }
});

class WatchList extends Component {
  addToWatchList = () => {
    console.log("add");
    const { movieId } = this.props;
    const movie = { movieId, action: "add" };
    this.props.addToWatchList(movie);
  };

  removeFromWatchList = () => {
    console.log("remove");
    const { movieId } = this.props;
    const movie = { movieId, action: "remove" };
    this.props.addToWatchList(movie);
  };

  render() {
    const { user, movieId, classes } = this.props;
    console.log(user);
    let userWatchList = user && user.watchList.includes("672");

    return (
      <div className={classes.watchlist}>
        {userWatchList ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            startIcon={<DoneIcon />}
            onClick={this.removeFromWatchList}
          >
            Added to Watchlist
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={this.addToWatchList}
          >
            Add to Watchlist
          </Button>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { user: auth };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { addToWatchList }
  )
)(WatchList);
