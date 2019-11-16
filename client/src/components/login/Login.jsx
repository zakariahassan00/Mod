import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Field, reduxForm } from "redux-form";
import { signIn, getUser } from "../../actions";
import { withStyles, Paper, Button, Typography } from "@material-ui/core";
import MuiTextFields from "../common/input/MuiTextField";
import { loginStyles } from "./loginStyles";

class Login extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  onSubmit = values => {
    this.props.signIn(values);
  };

  renderLogin = () => {
    const { classes, handleSubmit } = this.props;

    return (
      <div className={classes.modLogin}>
        <Paper className={classes.paper}>
          <Typography className={classes.typography} variant="h4" gutterBottom>
            Log into Mod
          </Typography>

          <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
            <Field
              name="email"
              type="email"
              label="Email"
              component={MuiTextFields}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={MuiTextFields}
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign in
            </Button>
          </form>

          <Button
            href="/auth/google"
            size="large"
            variant="contained"
            className={classes.googleButton}
          >
            Login With Google
          </Button>
        </Paper>
      </div>
    );
  };

  render() {
    const { classes, user } = this.props;
    console.log(user);
    return (
      <div>
        {!user ? (
          this.renderLogin()
        ) : (
          <div className={classes.logedin}>
            <Typography align="center" variant="h5">
              You Are Logged in!!
            </Typography>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { user: auth };
}

export default compose(
  withStyles(loginStyles),
  reduxForm({
    form: "login"
  }),
  connect(
    mapStateToProps,
    { signIn, getUser }
  )
)(Login);
