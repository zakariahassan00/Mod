import { fade } from "@material-ui/core/styles";

export const allMoviesStyles = theme => ({
  allMovies: {
    width: "100%",
    height: "100%",
    marginTop: 120
  },
  movie: {
    margin: "auto",
    width: 210,
    height: 320,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 240
    }
  },
  list: {
    width: "100%",
    padding: 10,
    minHeight: "calc(100vh - 210px)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    color: "#fff"
  },
  item: {
    margin: "auto"
  },
  row: {
    display: "flex",
    justifyContent: "space-around"
  },
  searchbar: {
    width: "50%",
    margin: "25px auto 50px"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
  inputRoot: {
    color: "#fff",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    }
  }
});
