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
    height: "85%",
    textAlign: "center",
    backgroundColor: "#000",
    overflow: "hidden"
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
    position: "absolute",
    width: "80%",
    height: "auto",
    zIndex: "123",
    top: "35%",
    left: "10%",
    color: "#fff",
    textAlign: "left"
  },
  releaseDate: {
    marginRight: 15
  },
  chip: {
    width: 50,
    height: 20,
    fontSize: 20
  },
  star: {
    position: "relative",
    top: 7
  },
  title: {
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem"
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
    top: -160,
    zIndex: "12",
    [theme.breakpoints.only("xs")]: {
      top: 0
    }
  },
  movieRates: {
    backgroundColor: darkGray,
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "#fff"
  },
  // ====> Movie Overview
  movieOverview: {
    minHeight: 350,
    width: "90%",
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: " 200px auto ",
    borderBottom: "1px solid #9FA6A2"
  },
  poster: {
    width: "100%",
    height: 300,
    position: "relative"
  },
  movieStoryLine: {
    width: "100%",
    minHeight: 300,
    padding: 25,
    textAlign: "justify"
  },
  credits: {
    color: "#808080",
    marginTop: 15,
    display: "inline-block",
    paddingRight: "1rem"
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
    width: "20%"
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
