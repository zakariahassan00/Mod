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
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 120,
      fontSize: "2rem"
    }
  },
  tabs: {
    justifyContent: "center"
  }
});
