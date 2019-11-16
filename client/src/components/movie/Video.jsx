import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  dialog: {
    width: "100%",
    maxWidth: 950,
    height: "auto",
    maxHeight: "none",
    overFlow: "hidden",
    padding: 0,
    color: "#fff",
    margin: "0 auto",
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1700
    }
  },
  dialogTitle: {
    color: "#fff",
    backgroundColor: "#000"
  },
  video: {
    width: "100%",
    overFlow: "hidden",

    height: 0,
    position: "relative",
    padding: 0,
    paddingBottom: "56.25%"
  },
  iframe: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  palyButton: {
    marginTop: 60,
    backgroundColor: "#610408",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#E50914"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 25,
      height: 25,
      fontSize: 10,
      padding: "0px 20px"
    }
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

class Video extends Component {
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
    const { classes, movie } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          classes={{ sizeLarge: classes.palyButton }}
          endIcon={<PlayArrowIcon />}
          onClick={this.handleOpen}
        >
          Watch Trailer
        </Button>

        <Dialog
          className={classes.dialog}
          classes={{ paper: classes.dialog }}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            disableTypography
            className={classes.dialogTitle}
            onClose={this.handleClose}
          >
            <Typography variant="h6">Play Trailer</Typography>

            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <div className={classes.video}>
            <iframe
              className={classes.iframe}
              src={`https://www.youtube.com/embed/${movie.video[0].key}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Video);
