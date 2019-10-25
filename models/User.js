const joi = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;
// const jwt = require("jsonwebtoken");
// const config = require("config");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  googleId: String,
  name: String,
  picture: String,
  watchList: [String],
  rateList: [Object]
});

mongoose.model("users", userSchema);

// function validateUser(user) {
//   const schema = {
//     email: joi
//       .string()
//       .required()
//       .email(),
//     password: joi.string().required()
//   };
//   return joi.validate(user, schema);
// }

// module.exports.validateUser = validateUser;
// module.exports.generateAuthToken = this.generateAuthToken;
