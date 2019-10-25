export const userRateStyles = theme => ({
  notRated: {
    width: 45,
    height: 45,
    color: "#ffb400",
    cursor: "pointer",
    display: "block",
    margin: "auto"
  },
  rated: {
    width: 45,
    height: 45,
    color: "#ffb400",
    cursor: "pointer",
    display: "block",
    margin: "auto"
  },
  userRate: {
    position: "relative",
    margin: "auto",
    width: "auto",
    textAlign: "center"
  },
  paper: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    zIndex: 3123123
  },
  removeRate: {
    marginRight: 15
  }
});
