import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiTextFields from '../common/input/MuiTextField'
import "./login.css";

const useStyles = makeStyles(theme => ({
  paper: {
  backgroundColor: "#1e242c  ",
  borderRadius: 15,
  },
  typography: {
    color: "#fff",
    marginBottom: 10
  },
  button: {
    margin: 20,
    width: 300,
    color: "#fff",
    textTransform: 'capitalize'
  },
  googleButton: {
    width: 300,
    color: "#fff",
    backgroundColor: "#d34836",
    textTransform: 'capitalize',
    "&:hover": {
      backgroundColor: "#a83c3c"
    },
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div className="mod-login ">
      <div className="mod-login-bg" />
      <Paper classes={ {root: classes.paper}} className="mod-login-form">
      <Typography classes={ {root: classes.typography}}  variant="h4" gutterBottom>
        Log into Mod
      </Typography>
        <MuiTextFields id="mod-login-email" label="Email" type="email" name="email"/>
        <MuiTextFields id="mod-login-password" label="Password" type="password" name="password"/>
        <div>
        <Button size="large" variant="contained" color="primary" classes={ {root: classes.button}}>
          Sign in
        </Button>
        </div>
        <div>
        <Button size="large" variant="contained" classes={ {root: classes.googleButton}}>
          Login With Google
        </Button>
        </div>
      </Paper>
    </div>
  );
}
