const joi = require("joi");
const bcrypt = require("bcrypt");
const { validateUser } = require("../models/User");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const _ = require("lodash");

module.exports = app => {
  app.post("/api/login", async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password");

    const ValidPW = await bcrypt.compare(req.body.password, user.password);
    if (!ValidPW) return res.status(400).send("Invalid email or password");

    res.send(_.pick(user, ["_id", "email"]));
    res.redirect("/");
  });
};
