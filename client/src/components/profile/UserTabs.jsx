import React, { Component, PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import MoviesGrid from "../allMovies/MoviesGrid";

const styles = theme => ({
  tabs: {
    width: 500,
    margin: "auto"
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

  render() {
    const { classes, user } = this.props;
    const { value } = this.state;

    return (
      <section>
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
          {user && <MoviesGrid movies={user.watchList} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {user && <MoviesGrid movies={user.favorites} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </section>
    );
  }
}

export default withStyles(styles)(UserTabs);
