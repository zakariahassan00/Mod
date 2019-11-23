const darkGray = "#1b1b1b";
// const lightGray = "#141414";

export const movieStyles = theme => ({
  movie: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#000",
    [theme.breakpoints.up("md")]: {
      // marginTop: 65
    },
    position: "relative"
  },
  // ====> Movie Info
  movieInfo: {
    position: "relative",
    width: "100%",
    height: "50vw",
    textAlign: "center",
    backgroundColor: "#000",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12
    }
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "11",
    backgroundColor: "rgba(0,0,0, .3)",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 56%, rgba(9, 9, 9, .7) 83%, #000000)"
  },
  img: {
    width: "100%"
  },
  movieDetails: {
    width: "80%",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "123",
    color: "#fff",
    textAlign: "left",
    // [theme.breakpoints.down("xs")]: {
    //   top: "20%",
    //   width: "100%"
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem"
    }
  },
  releaseDate: {
    marginRight: 15
  },
  chip: {
    width: 50,
    height: 20,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 14,
      fontSize: 12
    }
  },
  star: {
    position: "relative",
    top: 7
  },
  title: {
    margin: "20px 0",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
      margin: "10px 0 5px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
      margin: "40px 0 "
    }
  },
  duration: {
    marginRight: 20
  },
  genres: {
    padding: "0 10px",
    color: "#9FA6A2",
    borderRight: "1px solid #9FA6A2",
    borderLeft: "1px solid #9FA6A2"
  },
  genre: {
    marginRight: 5
  },
  // ====> Movie Rates Section
  movieData: {
    width: "100%",
    backgroundColor: "#FAFAFA",
    position: "relative",
    top: "-10vw",
    zIndex: "12",
    [theme.breakpoints.only("xs")]: {
      top: 0
    },
    [theme.breakpoints.only("sm")]: {
      top: -60
    }
  },
  movieRates: {
    backgroundColor: darkGray,
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: 70
    }
  },
  // ====> Movie Overview
  movieOverview: {
    width: "90%",
    minHeight: 350,
    margin: "20px auto",
    display: "flex",
    flexWrap: "wrap",
    borderBottom: "1px solid #9FA6A2",
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.3rem"
    }
  },
  section1: {
    width: "25%",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  subSection1: {
    margin: "auto"
  },
  subSection2: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: 200
    }
  },
  movieStoryLine: {
    width: "75%",
    minHeight: 200,
    padding: 25,
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  credits: {
    color: "#808080",
    paddingRight: "1rem",
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.3rem"
    }
  },
  // ====> Movie Cast
  movieCast: {
    padding: 25,
    borderBottom: "1px solid #9FA6A2"
  },
  actors: {
    wdith: "100%",
    margin: "20px auto",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center"
  },
  actor: {
    margin: 20,
    width: "20%",
    [theme.breakpoints.only("xl")]: {
      width: "10%"
    }
  },
  fullCast: {
    margin: "auto",
    width: "100%"
  },
  movieMoreDetails: {
    width: "100%",
    padding: 25
  },
  dialogContent: {
    width: 800
  },
  dialogHeader: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  // ====> Similar
  similarMovies: {
    padding: 25,
    marginBottom: 20,
    borderBottom: "1px solid #9FA6A2"
  },
  similarMoviesList: {
    display: "flex",
    justifyContent: "center"
  }
});
