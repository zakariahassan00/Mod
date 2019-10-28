// import { fade } from "@material-ui/core/styles";
// const gray = "#1e242c";
// const darkGray = "#141414";
// const black = "#000";

export const headerStyles = theme => ({
  clearNavbar: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0, 0)",
    height: 50,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {
      height: 60
    }
  },
  solidNavbar: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0, 1)",
    height: 50,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {
      height: 60
    }
  },
  title: {
    flexGrow: 1,
    position: "relative",
    bottom: 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem"
    }
  },
  avatar: {
    margin: 10,
    cursor: "pointer"
  },
  profile: {
    position: "relative"
  },
  notification: {
    position: "absolute",
    right: 130,
    top: 19,
    cursor: "pointer"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {},
    marginLeft: 0,
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      position: "relative",
      bottom: 5,
      marginRight: "calc(50% - 48px)"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      position: "relative",
      bottom: 0,
      marginRight: "10%"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("xs")]: {
      width: 0,
      "&:focus": {
        width: 120
      }
    }
  },
  appBarMenuList: {
    position: "absolute",
    display: "flex",
    left: "20%"
  },
  appBarMenuitem: {
    width: 90,
    textAlign: "center"
  },
  menuButton: {
    position: "absolute",
    padding: 0,
    top: 12,
    right: 10,
    [theme.breakpoints.up("sm")]: {
      top: 16,
      width: 30,
      height: 30
    }
  }
});
