const mongoose = require("mongoose");
const { Schema } = mongoose;

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
