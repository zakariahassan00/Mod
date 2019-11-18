const joi = require("joi");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const _ = require("lodash");

function validateUser(user) {
  const schema = {
    email: joi
      .string()
      .required()
      .email(),
    password: joi
      .string()
      .min(6)
      .required()
  };
  return joi.validate(user, schema);
}

module.exports = app => {
  app.post("/api/user/login", async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("Invalid email or password");

    const ValidPW = await bcrypt.compare(req.body.password, user.password);
    if (!ValidPW) return res.status(404).send("Invalid email or password");

    res.send(_.pick(user, ["_id", "email", "name"]));
  });
};
