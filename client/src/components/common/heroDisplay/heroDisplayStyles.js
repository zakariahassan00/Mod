export const heroDisplayStyles = theme => ({
  hero: {
    width: "100vw",
    height: "100vh",
    margin: "auto",
    position: "relative",
    // borderRadius: 10,
    overflow: "hidden"
    // position: "relative",
  },
  heroImage: {
    height: "100%",
    overflow: "hidden"
    // backgroundImage: "linear-gradient(to left ,#000, #000)"
  },
  heroContent: {
    position: "absolute",
    zIndex: "222",
    height: "100%",
    width: "50%",
    color: "#fff",
    textAlign: "center",
    top: 0,
    right: 0,
    fontFamily: "HelveticaNeue",
    paddingRight: "5%"
    // backgroundColor: "#000"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  heroOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "22",
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(88, 88, 88, 0.6) 56%, rgba(9, 9, 9, .7) 83%, #000000)",

    top: 0
  },
  heroTitle: {
    selfAlign: "center",
    marginTop: "30%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginTop: "15%"
    }
  },
  button: {
    width: 150,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    color: "#fff",
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      width: 120,
      margin: 10
    },
    [theme.breakpoints.down("xs")]: {
      width: 80,
      margin: 5,
      fontSize: ".6rem",
      paddingLeft: 5,
      paddingRight: 5
    }
  },
  heroOverview: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    margin: 25
  }
});
