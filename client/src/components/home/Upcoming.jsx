import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MoviesCarousel from "../common/carousel";
import { getUpcomingMovies } from "../../actions";

class UpcomingMovies extends PureComponent {
  componentDidMount() {
    this.props.getUpcomingMovies();
  }

  renderContent = () => {
    const { upcomingMovies } = this.props;

    switch (upcomingMovies) {
      case undefined:
        return;
      default:
        return <MoviesCarousel movies={upcomingMovies} />;
    }
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ upcomingMovies }) {
  return { upcomingMovies };
}
export default connect(
  mapStateToProps,
  { getUpcomingMovies }
)(UpcomingMovies);
