import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MuiTextFields from "../common/input/MuiTextField";
import { loginStyles } from "./loginStyles";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
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
  }
}

export default withStyles(loginStyles)(
  reduxForm({
    form: "login"
  })(Login)
);
