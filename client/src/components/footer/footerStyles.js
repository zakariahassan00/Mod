export const footerStyles = theme => ({
  footer: {
    width: "100%",
    minHeight: 300,
    padding: "40px",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center"
  },
  socialIcon: {
    color: "#808080",
    width: 40,
    height: 40,
    margin: "0px 25px",
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
      margin: "0px 15px"
    }
  },
  social: {
    letterSpacing: 10,
    marginBottom: 50
  },
  logo: {
    // textAlign: "center"
  },
  footerList: {
    color: "#808080",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      fontSize: 10,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  },
  footerListItem: {
    color: "#808080",
    textAlign: "left",
    margin: 10,
    cursor: "pointer"
  }
});
