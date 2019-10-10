import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e2e1",
    width: 300,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

export default function MuiTextFields({id, label, type, name }) {
  const classes = useStylesReddit();
  return (
    <TextField
      id={id}
      label={label}
      InputProps={{ classes, disableUnderline: true }}
      type={type}
      name={name}
      margin="normal"
      variant="filled"
    />
  );
}
