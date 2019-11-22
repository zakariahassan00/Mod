import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MoviesCarousel from "../common/carousel";
import { getSimilarMovies } from "../../api";

class SimilarMovies extends PureComponent {
  state = {
    similarMovies: undefined
  };

  async componentDidMount() {
    const { contentId } = this.props;
    const similarMovies = await getSimilarMovies(contentId);

    this.setState({ similarMovies });
  }

  renderSimilarContent = () => {
    const { similarMovies } = this.state;

    switch (similarMovies) {
      case undefined:
        return;
      default:
        return <MoviesCarousel movies={similarMovies} />;
    }
  };
  render() {
    return <div>{this.renderSimilarContent()}</div>;
  }
}

SimilarMovies.propTypes = {
  contentId: PropTypes.number.isRequired,
  getSimilarMovies: PropTypes.func
};

export default SimilarMovies;
