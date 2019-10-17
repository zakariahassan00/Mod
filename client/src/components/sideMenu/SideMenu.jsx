import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { toggleSideMenu } from "../../actions";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MovieIcon from "@material-ui/icons/Movie";
import { withStyles } from "@material-ui/core/styles";
import { sideMenuStyles } from "./sideMenuStyles";

class SideMenu extends Component {
  state = {
    open: true
  };

  handleSideMenuClose = () => {
    this.props.toggleSideMenu(false);
  };

  render() {
    const { user, classes, showSideMenu } = this.props;
    console.log(showSideMenu);

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
          <Avatar
            alt={user ? user.name : ""}
            src={user ? user.picture : ""}
            className={classes.avatar}
          />
          <h4>{user ? user.name : ""}</h4>
          <Button href="/api/logout" variant="contained" color="primary">
            logout
          </Button>
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
