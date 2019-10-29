import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import { footerStyles } from "./footerStyles";

const Footer = ({ classes }) => {
  const renderNavList = () => {
    const list = [
      "Home",
      "Top Rated",
      "In Theatre",
      "Box Office",
      "Upcoming",
      "Search"
    ];
    return (
      <ul className={classes.footerList}>
        {list.map(item => {
          return (
            <li key={item} className={classes.footerListItem}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderContactList = () => {
    const list = ["Register", "News", "Privacy Policy", "Condition of Use"];
    return (
      <ul className={classes.footerList}>
        {list.map(item => {
          return (
            <li key={item} className={classes.footerListItem}>
              <a href="/">{item}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <div className={classes.social}>
            <InstagramIcon className={classes.socialIcon} />
            <FacebookIcon className={classes.socialIcon} />
            <TwitterIcon className={classes.socialIcon} />
          </div>
          <div className={classes.logo}>
            <Typography variant="h2" component="h2">
              MoD
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderNavList()}
        </Grid>
        <Grid item xs={12} sm={3}>
          {renderContactList()}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(footerStyles)(Footer);
