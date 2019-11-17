import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getWatchList, getFavoritesList, getRateList } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import { profileStyles } from "./profileStyles";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import UserTabs from "./UserTabs";

class Profile extends Component {
  state = {};

  componentDidMount() {
    this.props.getWatchList();
    this.props.getRateList();
    this.props.getFavoritesList();
  }

  render() {
    const { classes, user, userLists } = this.props;
    console.log(userLists);
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
              <Typography variant="h5">{user && user.name}</Typography>
              <Typography variant="caption" style={{ color: "#808080" }}>
                {user && user.email}
              </Typography>
            </div>
          </Grid>

          <Grid item xs className={classes.tabs}>
            <UserTabs user={user} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// export default Profile;

// const Profile = () => {
//   return (
//     <div className={classes.profile}>
//       <Grid container justify="center">
//         <Grid item xs={12}>
//           <div className={classes.profileInfo}>
//             <Avatar
//               alt="Remy Sharp"
//               src={user && user.picture}
//               className={classes.bigAvatar}
//             />
//             <Typography variant="h5">{user && user.name}</Typography>
//             <Typography variant="caption" style={{ color: "#808080" }}>
//               {user && user.email}
//             </Typography>
//           </div>
//         </Grid>

//         <Grid item xs className={classes.tabs}>
//           <UserTabs user={user} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

function mapStateToProps({ auth, userLists }) {
  return { user: auth, userLists };
}

export default compose(
  connect(
    mapStateToProps,
    { getWatchList, getFavoritesList, getRateList }
  ),
  withStyles(profileStyles)
)(Profile);
