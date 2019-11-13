import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { toggleSideMenu } from "../../actions";
import {
  ClickAwayListener,
  Drawer,
  List,
  ListItem,
  Divider,
  Avatar,
  IconButton,
  Button,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MovieIcon from "@material-ui/icons/Movie";
import { withStyles } from "@material-ui/core/styles";
import { sideMenuStyles } from "./sideMenuStyles";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  state = {
    open: true
  };

  handleSideMenuClose = () => {
    this.props.toggleSideMenu(false);
  };

  render() {
    const { user, classes, showSideMenu } = this.props;

    return (
      <Drawer
        className={classes.sideMenu}
        variant="persistent"
        anchor="right"
        open={showSideMenu}
        classes={{
          paper: classes.sideMenuPaper
        }}
      >
        <div className={classes.sideMenuHeader}>
          <IconButton onClick={this.handleSideMenuClose}>
            <ChevronRightIcon className={classes.whiteIcon} />
          </IconButton>
          {user ? (
            <Fragment>
              <Link to="/profile">
                <Avatar
                  alt={user ? user.name : ""}
                  src={user ? user.picture : ""}
                  className={classes.avatar}
                />
              </Link>
              <h4>{user ? user.name : ""}</h4>
              <Button href="/api/logout" variant="contained" color="primary">
                logout
              </Button>
            </Fragment>
          ) : (
            <Button href="/login" variant="contained" color="primary">
              Login
            </Button>
          )}
        </div>
        <Divider />
        <List>
          {["Notifications", "My List"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <NotificationsNoneIcon className={classes.whiteIcon} />
                ) : (
                  <MovieIcon className={classes.whiteIcon} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

function mapStateToProps({ showSideMenu }) {
  return { showSideMenu };
}

export default compose(
  withStyles(sideMenuStyles),
  connect(
    mapStateToProps,
    { toggleSideMenu }
  )
)(SideMenu);
