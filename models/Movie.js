const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  id: Number,
  title: String,
  original_title: String,
  genres: [Object],
  vote_average: Number,
  poster_path: String,
  backdrop_path: String,
  release_date: String,
  popularity: Number,
  vote_count: Number,
  adult: Boolean,
  original_language: String,
  overview: String,
  cast: [Object],
  crew: [Object],
  video: [Object],
  runtime: Number,
  status: String,
  tagline: String,
  homepage: String,
  budget: Number,
  revenue: Number
});

mongoose.model("movies", movieSchema);
