import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { signIn, getUser } from "../../actions";
import { Paper, Button, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTextFields from "../common/MuiTextField";
import Logged from "../common/Logged";
import { loginStyles } from "./loginStyles";

class Login extends PureComponent {
  onSubmit = values => {
    this.props.signIn(values, () => {
      this.props.history.push("/");
    });
  };

  renderLogin = () => {
    const { classes, handleSubmit, auth } = this.props;

    return (
      <div className={classes.modLogin}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="h4"
              gutterBottom
            >
              Log into Mod
            </Typography>

            <Typography className={classes.error} variant="subtitle2">
              {auth.error}
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

            <div className={classes.divider}></div>

            <div>
              <Link to="/register">Create New Account</Link>
            </div>
          </Paper>
        </Slide>
      </div>
    );
  };

  render() {
    const { auth } = this.props;
    return <div>{auth.user ? <Logged /> : this.renderLogin()}</div>;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
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
