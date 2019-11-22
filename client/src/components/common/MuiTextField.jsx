import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    border: "1px solid #e2e2e1",
    width: 300,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff"
    }
  },
  focused: {}
};

const MuiTextField = ({
  classes,
  label,
  type,
  name,
  input,
  meta: { touched, invalid, error }
}) => {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      required
      InputProps={{ classes, disableUnderline: true }}
      margin="normal"
      variant="filled"
      helperText={touched && error}
      error={touched && invalid}
      {...input}
    />
  );
};

MuiTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default withStyles(styles)(MuiTextField);
