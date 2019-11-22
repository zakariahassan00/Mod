const joi = require("joi");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("users");
const _ = require("lodash");

module.exports = app => {
  app.post(
    "/api/user/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res) => {
      res.send(req.user);
    }
  );
};
