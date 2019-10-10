import React, { Component } from 'react';
import { connect } from "react-redux"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiTextFields from '../common/input/MuiTextField'
import { loginStyles } from './loginStyles'


class Login extends Component {

  render() {
    console.log(this.props.loginReducer)
    const { classes } = this.props
    return (
      <div className={classes.modLogin}>
        <div className={classes.modLoginBg} />
        <Paper className={classes.paper}>
          <Typography className={classes.typography} variant="h4" gutterBottom>
            Log into Mod
          </Typography>
          <MuiTextFields id="mod-login-email" label="Email" type="email" name="email"/>
          <MuiTextFields id="mod-login-password" label="Password" type="password" name="password"/>
          <div>
            <Button size="large" variant="contained" color="primary" className={classes.button}>
              Sign in
            </Button>
          </div>
          <div>
            <Button size="large" variant="contained" className={classes.googleButton}>
              Login With Google
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({loginReducer}) {
  return {loginReducer};
}

export default withStyles(loginStyles)(connect(mapStateToProps)(Login));
