const mongoose = require("mongoose");

const Movie = mongoose.model("movies");

module.exports = app => {
  app.get("/movies/getall", async (req, res) => {
    const allMovies = await Movie.find();

    res.send(allMovies);
  });
};
