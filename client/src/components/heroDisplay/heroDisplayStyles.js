export const heroDisplayStyles = theme => ({
  hero: {
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "50vw",
    backgroundColor: "#000",
    [theme.breakpoints.up("lg")]: {
      height: "100vh"
    }
  },
  heroImage: {
    height: "100%",
    overflow: "hidden"
  },
  heroContent: {
    width: "85%",
    height: "auto",
    maxWidth: "1200px",
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "222",
    textAlign: "left",
    color: "#fff",
    fontFamily: "HelveticaNeue",
    [theme.breakpoints.only("xs")]: {
      width: "95%"
    },
    [theme.breakpoints.only("sm")]: {
      top: "60%"
    }
  },
  card: {
    margin: "0 20px",
    [theme.breakpoints.only("xs")]: {
      margin: "0 10px"
    }
  },
  image: {
    width: "100%"
  },
  heroOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: "22",
    backgroundImage:
      "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(88, 88, 88, 0.6) 56%, rgba(9, 9, 9, .7) 83%, #000000)",
    backgroundColor: "rgb(0,0,0, .6)"
  },
  heroTitle: {
    selfAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      margin: "5px auto 10px"
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
    marginTop: 25,
    marginBottom: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: ".7rem",
      marginTop: 5,
      marginBottom: 10
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".4rem",
      margin: 0
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
  }
});
