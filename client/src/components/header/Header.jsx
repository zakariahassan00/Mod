import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { headerStyles } from "./headerStyles";
import { getUser, toggleSideMenu } from "./../../actions/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SideMenu from "../sideMenu";

import CssBaseline from "@material-ui/core/CssBaseline";

class Header extends Component {
  state = {};

  componentDidMount() {
    // fire action that make request to the server to check if the user is logged in or not
    this.props.getUser();
  }

  renderLoginButton() {
    const { auth, location, classes, toggleSideMenu } = this.props;
    const { open } = this.state;

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
    const { classes, auth } = this.props;
    const { open } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link to="/">Mod</Link>
            </Typography>

            {this.renderLoginButton()}
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
  withStyles(headerStyles),
  withRouter,
  connect(
    mapStateToProps,
    { getUser, toggleSideMenu }
  )
)(Header);
