import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { signUp, getUser } from "../../actions";
import { Paper, Button, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTextFields from "../common/MuiTextField";
import { loginStyles } from "../login/loginStyles";

class Register extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  onSubmit = values => {
    this.props.signUp(values);
  };

  renderRegisterPage = () => {
    const { classes, handleSubmit } = this.props;

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
    const { classes, user } = this.props;
    return (
      <div>
        {!user ? (
          this.renderRegisterPage()
        ) : (
          <div className={classes.logedin}>
            <Typography align="center" variant="h5">
              You Are Logged in!!
              {this.props.history.push(`/`)}
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
    form: "register"
  }),
  connect(
    mapStateToProps,
    { signUp, getUser }
  )
)(Register);
