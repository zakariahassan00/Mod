import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { headerStyles } from "./headerStyles";
import { getUser, getAllMovies, fetchingData } from "./../../actions/index";
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

const NavList = [
  { text: "Movies", link: "all" },
  { text: "In Theatre", link: "new" },
  { text: "Top Rated", link: "top" }
];

class Header extends Component {
  state = {
    showSideMenu: false,
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY > 60;
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
    const { auth, location, classes } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          !(location.pathname === "/login") && (
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          )
        );

      default:
        return (
          <div className={this.props.classes.profile}>
            {auth.picture ? (
              <Avatar
                alt={auth.name}
                src={auth.picture}
                className={classes.avatar}
                onClick={() => this.toggleSideMenu(true)}
              />
            ) : (
              <Avatar
                alt={auth.name}
                className={classes.avatar}
                onClick={() => this.toggleSideMenu(true)}
              >
                {auth.name.charAt(0)}
              </Avatar>
            )}
          </div>
        );
    }
  }

  toggleSideMenu = value => {
    this.setState({ showSideMenu: value });
  };

  onQueryChange = q => {
    let query = q.trim();

    // if user typed spaces there is no need to make request!
    if (query.length > 0) {
      this.props.fetchingData();
      this.props.getAllMovies(1, query);
      this.props.history.push(`/search?q=${q}`);
    } else {
      this.props.history.push(`/`);
    }
  };

  render() {
    const { classes, auth } = this.props;
    const { scrolled } = this.state;

    return (
      <div>
        <AppBar
          position="fixed"
          className={scrolled ? classes.solidNavbar : classes.clearNavbar}
        >
          <Toolbar>
            <Typography variant="h4" className={classes.brand}>
              <Link to="/">Mod</Link>
            </Typography>

            <Hidden smDown>
              <ul className={classes.appBarMenuList}>
                {NavList.map(item => {
                  return (
                    <li key={item.text} className={classes.appBarMenuitem}>
                      <Link to={`/${item.link}`}>{item.text}</Link>
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
                onChange={event => this.onQueryChange(event.target.value)}
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
                onClick={() => this.toggleSideMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <SideMenu
          user={auth}
          toggleSideMenu={this.toggleSideMenu}
          showSideMenu={this.state.showSideMenu}
        />
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
    { getUser, getAllMovies, fetchingData }
  )
)(Header);
