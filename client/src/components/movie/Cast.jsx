import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Slide, Button, Dialog, DialogContent } from "@material-ui/core";
import DialogTitle from "../common/dialog/DialogTitle";
import MovieCard from "../common/card/MovieCard";
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
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Full Cast
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
