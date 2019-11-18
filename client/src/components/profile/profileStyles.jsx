export const profileStyles = theme => ({
  profile: {
    width: "100%",
    minHeight: "calc(100vh)",
    marginTop: 80,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20
    }
  },
  profileInfo: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    marginBottom: 40
    // [theme.breakpoints.down("xs")]: {
    //   height: 200
    // }
  },
  avatar: {
    margin: "20px auto",
    width: 160,
    height: 160,
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 120
    }
  },
  tabs: {
    justifyContent: "center"
  }
});
