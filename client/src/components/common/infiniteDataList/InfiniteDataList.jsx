import React from "react";
import {
  InfiniteLoader,
  List,
  WindowScroller,
  AutoSizer
} from "react-virtualized";
import MovieCard from "../card/MovieCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const ITEM_WIDTH = 350;
const ITEM_HEIGHT = 360;

const styles = theme => ({
  grid: {
    justifyContent: "center"
  },
  gridItem: {
    width: ITEM_WIDTH
  },
  card: {
    height: "100%"
  },
  row: {
    display: "flex",
    justifyContent: "space-around"
  }
});

function generateIndexesForRow(rowIndex, maxItemsPerRow, itemsAmount) {
  const result = [];
  const startIndex = rowIndex * maxItemsPerRow;

  for (
    let i = startIndex;
    i < Math.min(startIndex + maxItemsPerRow, itemsAmount);
    i++
  ) {
    result.push(i);
  }

  return result;
}

function getMaxItemsAmountPerRow(width) {
  return Math.max(Math.floor(width / ITEM_WIDTH), 1);
}

function getRowsAmount(width, itemsAmount) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(width);

  return Math.ceil(itemsAmount / maxItemsPerRow);
}

const RowItem = React.memo(function RowItem({ movieId, classes }) {
  return (
    <Grid item className={classes.gridItem} key={movieId}>
      <MovieCard content={movieId} />
    </Grid>
  );
});

class InfiniteDataList extends React.PureComponent {
  infiniteLoaderRef = React.createRef();

  renderRow = ({ index, style, key }, width) => {
    const { movies, classes } = this.props;
    const maxItemsPerRow = getMaxItemsAmountPerRow(width);
    const data = generateIndexesForRow(
      index,
      maxItemsPerRow,
      movies.length
    ).map(movieIndex => movies[movieIndex]);

    return (
      <div style={style} key={key} className={classes.row}>
        {data.map(movie => (
          <MovieCard key={movie.id} content={movie} />
        ))}
      </div>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <section>
        <AutoSizer disableHeight>
          {({ width }) => {
            const { movies } = this.props;
            const rowCount = getRowsAmount(width, movies.length);

            return (
              <WindowScroller>
                {({ height, scrollTop }) => (
                  <List
                    width={width}
                    height={height}
                    overscanRowCount={3}
                    className={classes.grid}
                    autoHeight
                    rowCount={rowCount}
                    rowHeight={ITEM_HEIGHT}
                    rowRenderer={({ index, style, key }) => {
                      const { movies, classes } = this.props;
                      const maxItemsPerRow = getMaxItemsAmountPerRow(width);
                      const moviesIds = generateIndexesForRow(
                        index,
                        maxItemsPerRow,
                        movies.length
                      ).map(movieIndex => movies[movieIndex]);
                      return (
                        <div style={style} key={key} className={classes.row}>
                          {moviesIds.map(movie => (
                            <MovieCard key={movie.id} content={movie} />
                          ))}
                        </div>
                      );
                    }}
                    noRowsRenderer={this.noRowsRenderer}
                  />
                )}
              </WindowScroller>
            );
          }}
        </AutoSizer>
      </section>
    );
  }
}

export default withStyles(styles)(InfiniteDataList);
