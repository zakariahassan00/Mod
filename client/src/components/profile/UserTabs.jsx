import React, { PureComponent } from "react";
import { Typography, Tabs, Tab, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FavoritesListTab from "./tabs/FavoritesListTab";
import WatchListTab from "./tabs/WatchListTab";
import RateListTab from "./tabs/RateListTab";

const styles = theme => ({
  tabs: {
    width: 500,
    margin: "auto",
    [theme.breakpoints.only("xs")]: {
      width: 265
    }
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
      <Box pt={3}>{children}</Box>
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
              <WatchListTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FavoritesListTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <RateListTab />
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
