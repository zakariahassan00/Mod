import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UserTabs from "./UserTabs";
import { profileStyles } from "./profileStyles";

const Profile = ({ classes, user }) => {
  return (
    <div className={classes.profile}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.profileInfo}>
            <Avatar
              alt="Remy Sharp"
              src={user && user.picture}
              className={classes.avatar}
            />
            <Typography variant="h5">{user && user.name}</Typography>
            <Typography variant="caption" style={{ color: "#808080" }}>
              {user && user.email}
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.tabs}>
          <UserTabs user={user} />
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { user: auth };
}

export default compose(
  connect(mapStateToProps),
  withStyles(profileStyles)
)(Profile);
