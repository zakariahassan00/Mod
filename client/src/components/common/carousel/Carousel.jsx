import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import Measure from "react-measure";
import { Swipeable } from "react-swipeable";
import { withStyles, withWidth } from "@material-ui/core";
import MovieCard from "../MovieCard";
import { carouselStyles } from "./carouselStyles";

class Carousel extends PureComponent {
  state = {
    translate: 0
  };

  next() {
    // when user clicks next the list is shifted by specific amout of pixles(Swipe)
    const { width, data } = this.props;
    const carouselWidth = this.state.dimensions.width;
    let shifted = this.state.translate;
    let totalLength = data.length * 210;
    let swipe = 440;

    // small devices has smaller length (every card 150px width)
    if (width === "xs" || width === "sm") {
      totalLength = data.length * 150;
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
    const { classes, data } = this.props;
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
                {data.map(movie => {
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

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(carouselStyles),
  withWidth()
)(Carousel);
