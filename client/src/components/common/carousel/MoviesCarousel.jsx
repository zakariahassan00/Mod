import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import { compose } from "recompose";
import Measure from "react-measure";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import { moviesCarouselStyles } from "./moviesCarouselStyles";
import MovieCard from "../card/MovieCard";

class Carousel extends Component {
  state = {
    translate: 0
  };

  next() {
    // when user clicks next the list is shifted by specific amout of pixles(Swipe)
    const { width, movies } = this.props;
    const carouselWidth = this.state.dimensions.width;
    let shifted = this.state.translate;
    let totalLength = movies.length * 210;
    let swipe = 440;

    // small devices has smaller length (every card 150px width)
    if (width === "xs" || width === "sm") {
      totalLength = movies.length * 150;
      swipe = 300;
    }

    let overFlow = totalLength - (carouselWidth + shifted);

    // this line make sure that translation stop at the END of the items exactly!
    shifted = overFlow > swipe ? shifted + swipe : shifted + overFlow;

    this.setState({ translate: shifted });
  }

  back() {
    // when user clicks back the list is unshifted by specific amout of pixles(Swipe)
    const { width } = this.props;
    let shifted = this.state.translate;
    let swipe = 440;

    if (width === "xs" || width === "sm") {
      swipe = 300;
    }

    // this line make sure that translation stop at the START of the items exactly!
    let unshift = shifted > swipe ? (shifted -= swipe) : 0;
    this.setState({ translate: unshift });
  }

  render() {
    const { classes, movies } = this.props;
    const { translate } = this.state;
    return (
      <div className={classes.carousel}>
        <div onClick={() => this.back()} className={classes.carouselBack}>
          <i className={classes.leftArrow}></i>
        </div>

        <Measure
          bounds
          onResize={contentRect => {
            this.setState({ dimensions: contentRect.bounds, translate: 0 });
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef} className={classes.carouselWrapper}>
              <Swipeable
                onSwipedLeft={() => this.next()}
                onSwipedRight={() => this.back()}
                className={classes.carouselContainer}
                style={{
                  transform: `translateX(-${translate}px)`
                }}
              >
                {movies.map(movie => {
                  return <MovieCard key={movie.id} content={movie} />;
                })}
              </Swipeable>
            </div>
          )}
        </Measure>

        <div onClick={() => this.next()} className={classes.carouselNext}>
          <i className={classes.rightArrow}></i>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(moviesCarouselStyles),
  withWidth()
)(Carousel);
