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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StarRateIcon from "@material-ui/icons/StarRate";
import TheatersIcon from "@material-ui/icons/Theaters";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { withStyles } from "@material-ui/core/styles";
import { sideMenuStyles } from "./sideMenuStyles";
import { Link } from "react-router-dom";

const list = [
  {
    text: "Notifcations",
    link: "/notification",
    icon: <NotificationsNoneIcon />
  },
  {
    text: "All Movies",
    link: "/all",
    icon: <MovieIcon />
  },
  {
    text: "Top Rated",
    link: "/top",
    icon: <StarRateIcon />
  },
  {
    text: "In Theatre",
    link: "/new",
    icon: <TheatersIcon />
  },
  {
    text: "My Lists",
    link: "/profile",
    icon: <PlayArrowIcon />
  }
];

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
            </Fragment>
          ) : (
            <Button href="/login" variant="contained" color="primary">
              Login
            </Button>
          )}
        </div>
        <Divider />
        <List>
          {list.map(item => (
            <Link to={`${item.link}`}>
              <ListItem className={classes.listItem} button key={item.text}>
                <ListItemIcon className={classes.whiteIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
          {/* Logout button */}
          <a href="/api/logout">
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.whiteIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </a>
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
