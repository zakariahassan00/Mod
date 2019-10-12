import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { headerStyles } from "./headerStyles";

class Header extends Component {
  state = {};

  // hide login button when user in the login page!
  renderLoginButton() {
    return (
      !(this.props.location.pathname === "/login") && (
        <Button href="/login" variant="contained" color="primary">
          Login
        </Button>
      )
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link to="/">Mod</Link>
            </Typography>
            {this.renderLoginButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(
  withStyles(headerStyles),
  withRouter
)(Header);
