import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { addToWatchList } from "../../../actions";
import { withStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  watchlist: {
    textAlign: "center",
    margin: "10px auto"
  },
  button: {
    textTransform: "capitalize",
    margin: "auto"
  }
});

class WatchList extends Component {
  addToWatchList = () => {
    const { movieId } = this.props;
    const movie = { movieId, action: "add" };
    this.props.addToWatchList(movie);
  };

  removeFromWatchList = () => {
    const { movieId } = this.props;
    const movie = { movieId, action: "remove" };
    this.props.addToWatchList(movie);
  };

  render() {
    const { user, movieId, classes } = this.props;

    // first check if the user added this content to his/her Watchlist or not!
    const added =
      (user && user.watchList.filter(item => item == movieId).length > 0) ||
      false;

    return (
      <div className={classes.watchlist}>
        {added ? (
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
