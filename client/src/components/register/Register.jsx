import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { signUp, getUser } from "../../actions";
import { Paper, Button, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTextFields from "../common/MuiTextField";
import Logged from "../common/Logged";
import { loginStyles } from "../login/loginStyles";

class Register extends Component {
  onSubmit = values => {
    this.props.signUp(values, () => {
      this.props.history.push("/");
    });
  };

  renderRegisterPage = () => {
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
              Register In Mod
            </Typography>

            <Typography className={classes.error} variant="subtitle2">
              {auth.error}
            </Typography>

            <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
              <Field
                name="name"
                type="text"
                label="Full Name"
                component={MuiTextFields}
              />
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
                Sign Up
              </Button>
            </form>

            <div className={classes.divider}></div>

            <Button
              href="/auth/google"
              size="large"
              variant="contained"
              className={classes.googleButton}
            >
              Continue With Google
            </Button>

            <div>
              <Link to="/login">Back To Login</Link>
            </div>
          </Paper>
        </Slide>
      </div>
    );
  };

  render() {
    const { auth } = this.props;
    return <div>{auth.user ? <Logged /> : this.renderRegisterPage()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object
};

export default compose(
  withStyles(loginStyles),
  reduxForm({
    form: "register"
  }),
  connect(
    mapStateToProps,
    { signUp, getUser }
  )
)(Register);
