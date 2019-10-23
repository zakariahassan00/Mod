const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  id: Number,
  title: String,
  original_title: String,
  genres: [String],
  vote_average: Number,
  poster_path: String,
  backdrop_path: String,
  release_date: String,
  popularity: Number,
  vote_count: Number,
  adult: Boolean,
  original_language: String,
  overview: String
});

mongoose.model("movies", movieSchema);
