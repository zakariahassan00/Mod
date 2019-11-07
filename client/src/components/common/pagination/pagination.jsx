import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";

const styles = {
  pagination: {
    margin: "15px auto",
    display: "flex"
  },
  page: {
    width: 30,
    height: 30,
    cursor: "pointer",
    margin: 10,
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    borderRadius: 4,
    padding: 5,
    textAlign: "center",
    transition: ".3s ",
    "&:hover": {
      backgroundColor: "red",
      color: "#fff"
    }
  },
  active: {
    backgroundColor: "red",
    color: "#fff"
  }
};

const Pagination = ({
  classes,
  itemsCount,
  itemsPerpage,
  onPageChange,
  currentPage
}) => {
  const pagesCount = Math.floor(itemsCount / itemsPerpage);
  const pages = _.range(1, pagesCount + 1);

  function renderPages() {
    return pages.map(page => {
      if (currentPage == page) {
        return (
          <div
            className={classes.page}
            key={page}
            style={{ backgroundColor: "red", color: "#fff" }}
          >
            {page}
          </div>
        );
      } else {
        return (
          <div
            className={classes.page}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </div>
        );
      }
    });
  }

  return <div className={classes.pagination}>{renderPages()}</div>;
};

export default withStyles(styles)(Pagination);
