const mongoose = require("mongoose");
const { Schema } = mongoose;
const joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const keys = require("../config/keys");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  googleId: String,
  name: String,
  picture: String,
  watchList: [Object],
  favorites: [Object],
  rateList: [Object]
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, keys.tokenSecretKey, {
    expiresIn: 86400 // expires in 24 hours
  });
  return token;
};

mongoose.model("users", userSchema);

function validateUser(user) {
  const schema = {
    email: joi
      .string()
      .required()
      .email(),
    password: joi
      .string()
      .min(6)
      .required(),
    name: joi.string().required()
  };
  return joi.validate(user, schema);
}

module.exports.validateUser = validateUser;
