const darkGray = "#1b1b1b";
// const lightGray = "#141414";

export const movieStyles = theme => ({
  movie: {
    width: "100%",
    heigth: "100%",
    backgroundColor: "#000",
    [theme.breakpoints.up("md")]: {
      // marginTop: 65
    },
    position: "relative"
  },
  video: {
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
  movieOverview: {
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
    // color: "#9FA6A2",
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
  palyButton: {
    marginTop: 60,
    backgroundColor: "#610408",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#E50914"
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 25
    }
  },
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
  movieInfoHeader: {
    backgroundColor: darkGray,
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "#fff"
  },

  movieDescription: {
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
  movieCast: {
    padding: 25,
    borderBottom: "1px solid #9FA6A2"
  },
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
