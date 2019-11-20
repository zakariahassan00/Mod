import React, { PureComponent } from "react";
import MoviesCarousel from "../common/carousel";
import { getSimilarMovies } from "../../api";

class SimilarMovies extends PureComponent {
  state = {
    similarMovies: []
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

export default SimilarMovies;
