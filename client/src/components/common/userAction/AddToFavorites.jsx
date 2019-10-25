import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { toggleFavorites } from "../../../actions";
import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const styles = theme => ({
  favorite: {
    width: 35,
    height: 35,
    color: "#E50914",
    cursor: "pointer"
  },
  addToFavorite: {
    width: 50,
    margin: "auto"
  }
});

class AddToFavorites extends Component {
  state = {};

  toggle = action => {
    const { toggleFavorites, contentId } = this.props;
    const content = {
      id: contentId,
      action
    };

    toggleFavorites(content);
  };

  renderFavoritesIcon = () => {
    const { classes, user, contentId } = this.props;
    switch (user) {
      case null:
        return;
      case false:
        return <FavoriteBorderIcon className={classes.favorite} />;
      default:
        const added = user.favorites.includes(contentId.toString());
        return added ? (
          <FavoriteIcon
            onClick={() => this.toggle("remove")}
            className={classes.favorite}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => this.toggle("add")}
            className={classes.favorite}
          />
        );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.addToFavorite}>{this.renderFavoritesIcon()}</div>
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
    { toggleFavorites }
  )
)(AddToFavorites);
