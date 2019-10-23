export const heroDisplayStyles = theme => ({
  hero: {
    margin: "auto",
    position: "relative",
    overflow: "hidden"
  },
  heroImage: {
    height: "100%",
    overflow: "hidden"
    // backgroundImage: "linear-gradient(to left ,#000, #000)"
  },
  heroContent: {
    position: "absolute",
    zIndex: "222",
    height: "auto",
    width: "65%",
    color: "#fff",
    textAlign: "left",
    top: "50%",
    marginTop: -250,
    right: 0,
    fontFamily: "HelveticaNeue",
    paddingRight: "5%",
    // backgroundColor: "#000",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      top: "65%",
      right: 155
    },
    [theme.breakpoints.only("sm")]: {
      width: "95%",
      top: "25%",
      marginTop: 0,
      right: 0
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
      top: "20%",
      marginTop: 0,
      right: 0,
      textAlign: "right"
    }
  },
  image: {
    width: "100%"
  },
  heroOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "22",
    backgroundImage:
      "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(88, 88, 88, 0.6) 56%, rgba(9, 9, 9, .7) 83%, #000000)",
    // backgroundColor: "rgb(0,0,0, .6)",
    top: 0
  },
  heroTitle: {
    selfAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      marginTop: "15%",
      marginBottom: 20
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      marginTop: "1.7%",
      marginBottom: 20
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.7rem",
      marginTop: "0%"
    }
  },
  heroOverview: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    marginTop: 25,
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: ".7rem",
      marginTop: 5,
      marginBottom: 10
    }
  },
  button: {
    width: 150,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    color: "#fff",
    margin: 20,
    textTransform: "capitalize",
    [theme.breakpoints.only("xs")]: {
      height: 20,
      width: 80,
      margin: 5,
      fontSize: ".6rem"
    },
    [theme.breakpoints.up("md")]: {
      height: 35,
      width: 120,
      margin: 10,
      fontSize: "1rem"
    }
  },
  rating: {
    fontSize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 25
    }
  },
  chip: {
    fontSize: ".6rem",
    height: "12px",
    position: "relative",
    bottom: 3,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      bottom: 7,
      height: "18px"
    }
  },
  card: {
    margin: "auto",
    overflow: "hidden",
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 140
    }
  },
  media: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 210
    }
  }
});
