import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { headerStyles } from "./headerStyles";
import { getUser } from "./../../actions/index";

class Header extends Component {
  componentDidMount() {
    // fire action that make request to the server to check if the user is logged in or not
    this.props.getUser();
  }

  renderLoginButton() {
    const { auth, location } = this.props;

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
          <Button href="/api/logout" variant="contained" color="primary">
            logout
          </Button>
        );
    }
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withStyles(headerStyles),
  withRouter,
  connect(
    mapStateToProps,
    { getUser }
  )
)(Header);
