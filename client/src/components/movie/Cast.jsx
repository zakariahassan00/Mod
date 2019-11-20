import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Slide,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MovieCard from "../common/MovieCard";
import { movieStyles } from "./movieStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Cast extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, cast } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.actors}>
          {cast.map(
            person =>
              person.order < 6 && (
                <div key={person.id} className={classes.actor}>
                  <MovieCard key={person.id} content={person} sm />
                  {person.name}
                  <div style={{ color: "#808080" }}>({person.character})</div>
                </div>
              )
          )}
          <div className={classes.fullCast}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.handleOpen}
            >
              See Full Cast
            </Button>
          </div>
        </div>

        {/* this dialog shows all cast */}
        <Dialog
          TransitionComponent={Transition}
          fullScreen
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle disableTypography className={classes.dialogHeader}>
            <Typography variant="h6">Full Cast</Typography>

            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <div className={classes.actors}>
              {cast.map(person => (
                <div key={person.id} className={classes.actor}>
                  <MovieCard key={person.id} content={person} sm />
                  {person.name}
                  <div style={{ color: "#808080" }}>({person.character})</div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(movieStyles)(Cast);
