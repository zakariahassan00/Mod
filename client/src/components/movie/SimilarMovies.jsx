import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Carousel from "../common/carousel";
import { getSimilarMovies } from "../../actions";

class SimilarMovies extends PureComponent {
  componentDidMount() {
    const { contentId } = this.props;

    this.props.getSimilarMovies(contentId);
  }

  renderContent = () => {
    const { similarMovies } = this.props;

    switch (similarMovies) {
      case undefined:
        return;
      default:
        return <Carousel data={similarMovies} />;
    }
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ similarMovies }) {
  return { similarMovies };
}
export default connect(
  mapStateToProps,
  { getSimilarMovies }
)(SimilarMovies);
