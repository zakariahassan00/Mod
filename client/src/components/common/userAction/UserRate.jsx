import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { rateContent } from "../../../actions";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles, Menu, MenuItem } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import RemoveIcon from "@material-ui/icons/Remove";
import { userRateStyles } from "./userRateStyles";

class UserRate extends Component {
  state = {
    open: true,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeRate = newRate => {
    const content = {
      id: this.props.contentId,
      rate: newRate
    };

    this.props.rateContent(content);
  };

  renderUserRate = () => {
    const { classes, auth, contentId } = this.props;

    switch (auth.user) {
      case false:
        return (
          <div>
            <StarBorderIcon
              className={classes.rateStar}
              onClick={this.handleClick}
            />
            Rate This
          </div>
        );
      default:
        const rated = auth.user.rateList.filter(content => {
          return content.item.id === contentId;
        });

        return rated[0] ? (
          <div>
            <StarIcon className={classes.rateStar} onClick={this.handleClick} />
            You Rated {rated[0].rate} !
          </div>
        ) : (
          <div>
            <StarBorderIcon
              className={classes.rateStar}
              onClick={this.handleClick}
            />
            Rate This
          </div>
        );
    }
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.userRate}>
        {this.renderUserRate()}

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <RemoveIcon
              className={classes.removeRate}
              onClick={() => this.changeRate(0)}
            />

            <Rating
              name="simple-controlled"
              max={10}
              onChange={(event, newValue) => {
                this.changeRate(newValue);
              }}
            />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserRate.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  movieId: PropTypes.number,
  rateContent: PropTypes.func.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withStyles(userRateStyles),
  connect(
    mapStateToProps,
    { rateContent }
  )
)(UserRate);
