import React, { PureComponent } from "react";
import MoviesCarousel from "../common/carousel";
import { getUpcomingMovies } from "../../api";

class UpcomingMovies extends PureComponent {
  state = {
    upcoming: []
  };

  async componentDidMount() {
    const upcoming = await getUpcomingMovies();

    this.setState({ upcoming });
  }

  renderContent = () => {
    const { upcoming } = this.state;

    switch (upcoming) {
      case undefined:
        return;
      default:
        return <MoviesCarousel movies={upcoming} />;
    }
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default UpcomingMovies;
