const mongoose = require("mongoose");
const { Schema } = mongoose;
const joi = require("joi");

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
