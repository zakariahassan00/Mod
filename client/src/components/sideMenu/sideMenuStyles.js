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
    flexShrink: 0
  },
  sideMenuPaper: {
    width: drawerWidth,
    backgroundColor: darkGray,
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
  whiteIcon: {
    color: "#fff"
  }
});
