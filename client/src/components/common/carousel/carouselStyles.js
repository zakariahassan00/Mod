const carouselArrow = {
  width: 40,
  height: 40,
  top: "50%",
  marginTop: -20,
  position: "absolute",
  zIndex: "1",
  borderRadius: "50%",
  color: "#fff",
  backgroundColor: "rgba(255, 255, 255, 1)",
  outline: "none",
  padding: 10,
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2)"
};

export const carouselStyles = theme => ({
  carousel: {
    minWidth: "100%",
    minHeight: 210,
    margin: "10px auto 30px",
    display: "grid",
    gridAutoFlow: "column",
    position: "relative"
  },
  carouselContainer: {
    display: "grid",
    gridAutoFlow: "column",
    transition: ".4s ease-in-out"
  },
  carouselWrapper: {
    overflow: "hidden"
  },
  carouselBack: {
    ...carouselArrow,
    left: 0,
    marginLeft: -20
  },
  leftArrow: {
    border: "solid #000",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(135deg)"
  },
  carouselNext: {
    ...carouselArrow,
    right: 0,
    marginRight: -20
  },
  rightArrow: {
    border: "solid #000",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(-45deg)"
  },
  card: {
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      width: 160
    },
    [theme.breakpoints.up("sm")]: {
      width: 200
    }
  },
  media: {
    [theme.breakpoints.up("xs")]: {
      height: 220
    },
    [theme.breakpoints.up("sm")]: {
      height: 290
    }
  }
});
