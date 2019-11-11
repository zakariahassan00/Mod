import React from "react";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";

const styles = {
  pagination: {
    margin: "15px auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  page: {
    width: 40,
    height: 30,
    cursor: "pointer",
    margin: "10px 0",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    borderRadius: 4,
    padding: 5,
    textAlign: "center",
    transition: ".3s ",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff"
    }
  },
  active: {
    backgroundColor: "#3f51b5",
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
  const pagesCount = Math.ceil(itemsCount / itemsPerpage);
  const pages = _.range(1, pagesCount + 1);

  function renderPages() {
    return pages.map(page => {
      if (currentPage == page) {
        return (
          <div
            className={classes.page}
            key={page}
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
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
