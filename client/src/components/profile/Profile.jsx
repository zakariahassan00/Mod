import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Grid, Avatar, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UserTabs from "./UserTabs";
import { profileStyles } from "./profileStyles";

const Profile = ({ classes, auth }) => {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.profile}>
        <Grid container justify="center">
          <Grid item xs={12}>
            {auth.user && (
              <div className={classes.profileInfo}>
                {auth.user.picture ? (
                  <Avatar
                    alt={auth.user.name}
                    src={auth.user.picture}
                    className={classes.avatar}
                  />
                ) : (
                  <Avatar alt={auth.user.name} className={classes.avatar}>
                    {auth.user.name.charAt(0)}
                  </Avatar>
                )}

                <Typography variant="h5">
                  {auth.user && auth.user.name}
                </Typography>
                <Typography variant="caption" style={{ color: "#808080" }}>
                  {auth.user && auth.user.email}
                </Typography>
              </div>
            )}
          </Grid>

          <Grid item xs={12} className={classes.tabs}>
            <UserTabs user={auth.user} />
          </Grid>
        </Grid>
      </div>
    </Slide>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  connect(mapStateToProps),
  withStyles(profileStyles)
)(Profile);
