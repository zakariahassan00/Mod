import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import { compose } from "recompose";
import Measure from "react-measure";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { moviesCarouselStyles } from "./moviesCarouselStyles";

class Carousel extends Component {
  state = {
    translate: 0
  };
  next() {
    const { width, movies } = this.props;
    let totalLength = movies.length;
    const carouselWidth = this.state.dimensions.width;
    let shifted = this.state.translate;
    let swipe = 0;
    console.log("next");

    if (width == "md" || "lg" || "sm") {
      totalLength = totalLength * 220;
      swipe = 440;
    }
    if (width == "xs") {
      totalLength = totalLength * 180;
      swipe = 220;
    }

    let overFlow = totalLength - (carouselWidth + shifted);
    if (overFlow < swipe) {
      shifted += overFlow;
      overFlow = 0;
    } else if (overFlow > swipe) {
      shifted += swipe;
    }

    this.setState({ translate: shifted });
  }

  back() {
    const { width, movies } = this.props;
    let totalLength = movies.length;
    let shifted = this.state.translate;
    let swipe = 0;
    console.log("back");

    if (width == "md" || "lg" || "sm") {
      totalLength = totalLength * 220;
      swipe = 440;
    }
    if (width == "xs") {
      totalLength = totalLength * 180;
      swipe = 220;
    }

    if (shifted <= swipe) {
      shifted = 0;
    } else if (shifted > swipe) {
      shifted -= swipe;
    }

    this.setState({ translate: shifted });
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
            this.setState({ dimensions: contentRect.bounds });
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
                  return (
                    <Card className={classes.card} key={movie.id}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={movie.poster_path}
                          title={movie.title}
                        />
                      </CardActionArea>
                    </Card>
                  );
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

export default compose(withStyles(moviesCarouselStyles, withWidth()))(Carousel);
