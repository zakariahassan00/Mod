const drawerWidth = 280;
const darkGray = "#141414";

export const sideMenuStyles = theme => ({
  title: {
    flexGrow: 1
  },
  avatar: {
    margin: 10,
    cursor: "pointer"
  },
  menuProfile: {
    width: "100%",
    height: 120,
    border: "1px solid #fff"
  },
  sideMenu: {
    width: drawerWidth,
    flexShrink: 0,
    color: "#fff"
  },
  sideMenuPaper: {
    width: drawerWidth,
    backgroundColor: "#000",
    color: "#fff"
  },
  sideMenuHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    color: "#fff"
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#610408"
    }
  },
  whiteIcon: {
    color: "#fff"
  },
  logOutbutton: {
    color: "#fff",
    backgroundColor: "#610408",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#E50914"
    }
  }
});
