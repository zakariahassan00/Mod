import React, { Component, PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import MoviesGrid from "../allMovies/MoviesGrid";
import MovieCard from "../common/card/MovieCard";
import { Grid } from "@material-ui/core";
import UserRate from "../common/userAction/UserRate";

const styles = theme => ({
  tabs: {
    width: 500,
    margin: "auto"
  },
  moviesListItem: {
    width: "100%",
    padding: "10px 30px",
    display: "flex",
    backgroundColor: "#000",
    borderRadius: 8,
    flexWrap: "wrap"
  },
  title: {
    width: "100%"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

class UserTabs extends PureComponent {
  state = {
    value: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  renderTabs = () => {
    const { classes, user } = this.props;
    const { value } = this.state;
    switch (user) {
      case null:
        return;
      case false:
        return <h1>Please Log In</h1>;
      default:
        return (
          <div>
            <Tabs
              value={value}
              onChange={this.handleChange}
              className={classes.tabs}
            >
              <Tab label="Watch List" />
              <Tab label="Favorites" />
              <Tab label="Rated" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <MoviesGrid movies={user.watchList} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MoviesGrid movies={user.favorites} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={6}>
                {user.rateList.map(movie => {
                  return (
                    <Grid item xs={4} key={movie.item.id}>
                      <div className={classes.moviesListItem}>
                        <Typography
                          align="center"
                          variant="h5"
                          className={classes.title}
                        >
                          {movie.item.title}
                        </Typography>
                        <MovieCard sm content={movie.item} />
                        <UserRate contentId={movie.item.id} />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>
          </div>
        );
    }
  };

  render() {
    return <section>{this.renderTabs()}</section>;
  }
}

export default withStyles(styles)(UserTabs);
