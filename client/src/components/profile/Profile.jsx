import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { profileStyles } from "./profileStyles";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import UserTabs from "./UserTabs";

const Profile = ({ classes, user }) => {
  return (
    <div className={classes.profile}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.profileInfo}>
            <Avatar
              alt="Remy Sharp"
              src={user && user.picture}
              className={classes.bigAvatar}
            />
            <Typography variant="h5" gutterBottom>
              {user && user.name}
            </Typography>
          </div>
        </Grid>

        <Grid item xs className={classes.tabs}>
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
