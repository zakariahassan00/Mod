export const userRateStyles = theme => ({
  rateStar: {
    width: 45,
    height: 45,
    color: "#ffb400",
    cursor: "pointer",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: 35,
      height: 35
    }
  },
  userRate: {
    position: "relative",
    margin: "auto",
    width: 120,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14
    }
  },
  removeRate: {
    marginRight: 15
  }
});
