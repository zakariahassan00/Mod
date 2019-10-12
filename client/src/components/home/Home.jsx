import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getAllMovies } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import { homeStyles } from "./homeStyles";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.getAllMovies();
  }

  renderMovies() {
    const { movies } = this.props;

    return movies.map(({ title }) => {
      return (
        <div key={title}>
          <h3>{title}</h3>
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{this.renderMovies()}</div>;
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default compose(
  withStyles(homeStyles),
  connect(
    mapStateToProps,
    { getAllMovies }
  )
)(Home);
