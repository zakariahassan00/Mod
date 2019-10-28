import React, { Component } from "react";
import axios from "axios";
import MoviesCarousel from "../carousel";

class RelativeToContent extends Component {
  state = {};

  async componentDidMount() {
    //   get similar movies or TV shows from tmdb api
    const { contentId } = this.props;
    const similarContent = await axios.get(
      `https://api.themoviedb.org/3/movie/${contentId}/similar?api_key=0c2fe905bc563d51fddca679b6766463&language=en-US`
    );

    // modifing images url in data
    similarContent.data.results.map(content => {
      content.poster_path = `https://image.tmdb.org/t/p/original${content.poster_path}`;
      return content;
    });

    this.setState({ similarContent: similarContent.data.results });
  }

  renderSimilarContent = () => {
    const { similarContent } = this.state;

    switch (similarContent) {
      case undefined:
        return;
      default:
        return <MoviesCarousel movies={similarContent} />;
    }
  };
  render() {
    return <div>{this.renderSimilarContent()}</div>;
  }
}

export default RelativeToContent;
