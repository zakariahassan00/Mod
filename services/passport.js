const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  User.findById(user._id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, _json } = profile;

      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({
        googleId: id,
        email: _json.email,
        name: _json.name,
        picture: _json.picture,
        watchList: [],
        rateList: []
      }).save();
      return done(null, newUser);
    }
  )
);

passport.use(
  new LocalStrategy({ usernameField: "email" }, function(
    username,
    password,
    done
  ) {
    User.findOne({ email: username }, async function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
