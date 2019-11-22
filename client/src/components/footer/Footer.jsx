import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { footerStyles } from "./footerStyles";

const list = [
  { text: "Home", link: "/" },
  { text: "Top Rated", link: "/top" },
  { text: "In Theatre", link: "/new" },
  { text: "Movies", link: "/all" }
];

const Footer = ({ classes }) => {
  const renderNavList = () => {
    return (
      <ul className={classes.footerList}>
        {list.map(item => {
          return (
            <li key={item.text} className={classes.footerListItem}>
              <Link to={item.link}>{item.text}</Link>
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
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyles)(Footer);
