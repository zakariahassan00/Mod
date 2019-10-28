import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { headerStyles } from "./headerStyles";
import { getUser, toggleSideMenu } from "./../../actions/index";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  withWidth,
  Hidden,
  IconButton,
  InputBase
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SideMenu from "../sideMenu";

class Header extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY > 80;
      if (scrolled) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });

    // fire action that make request to the server to check if the user is logged in or not
    this.props.getUser();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  renderLoginButton() {
    const { auth, location, classes, toggleSideMenu } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          !(location.pathname === "/login") && (
            <Button href="/login" variant="contained" color="primary">
              Login
            </Button>
          )
        );

      default:
        return (
          <div className={this.props.classes.profile}>
            <Avatar
              alt={auth.name}
              src={auth.picture}
              className={classes.avatar}
              onClick={() => toggleSideMenu(true)}
            />
          </div>
        );
    }
  }

  render() {
    const { classes, auth, toggleSideMenu } = this.props;
    const { scrolled } = this.state;
    return (
      <div>
        <AppBar
          position="fixed"
          className={scrolled ? classes.solidNavbar : classes.clearNavbar}
        >
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link to="/">Mod</Link>
            </Typography>

            <Hidden smDown>
              <ul className={classes.appBarMenuList}>
                {["Movies", "TV Series", "Top Rated"].map(text => {
                  return (
                    <li key={text} className={classes.appBarMenuitem}>
                      <Link to="/">{text}</Link>
                    </li>
                  );
                })}
              </ul>
            </Hidden>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Hidden smDown>
              <NotificationsNoneIcon className={classes.notification} />
              {this.renderLoginButton()}
            </Hidden>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => toggleSideMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <SideMenu user={auth} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withWidth(),
  withStyles(headerStyles),
  withRouter,
  connect(
    mapStateToProps,
    { getUser, toggleSideMenu }
  )
)(Header);
