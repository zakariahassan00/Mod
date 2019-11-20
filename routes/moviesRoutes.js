const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Movie = mongoose.model("movies");
const User = mongoose.model("users");

module.exports = app => {
  // return all Movies in the DB
  app.get("/api/movies/all", async (req, res) => {
    const page = req.query.page;
    const perPage = 20;
    const query = req.query.searchQuery;

    const count = await Movie.find({
      title: { $regex: query, $options: "i" }
    }).count();

    const allMovies = await Movie.find({
      title: { $regex: query, $options: "i" }
    })
      .select("id poster_path title")
      .limit(perPage)
      .skip((page - 1) * perPage);

    res.send({ movies: allMovies, count });
  });

  app.get("/api/movies/latest", async (req, res) => {
    const latestMovies = await Movie.find()
      .select("-cast -crew -video")
      .$where(function() {
        // this will convert minmum release date we want into number
        const minReleaseDate = Date.parse("2019-10-01");
        const minRate = 6.5;

        // we want the movies which have release date "number" higher than minRealeaseDate!
        const movieReleaseDate = Date.parse(this.release_date);
        const movieRate = this.vote_average;
        return movieReleaseDate > minReleaseDate && movieRate >= minRate;
      });

    res.send(latestMovies);
  });

  app.get("/api/movies/top", async (req, res) => {
    const page = req.query.page;
    const perPage = 20;
    const count = await Movie.find()
      .$where(function() {
        const minRate = 7.5;

        const movieRate = this.vote_average;
        return movieRate >= minRate;
      })
      .count();

    const topRatedMovies = await Movie.find()
      .$where(function() {
        const minRate = 7.5;

        const movieRate = this.vote_average;
        return movieRate >= minRate;
      })
      .select("-cast -crew -video")
      .limit(perPage)
      .skip(perPage * (page - 1));

    res.send({ movies: topRatedMovies, count });
  });

  app.get("/api/movies/:id", async (req, res) => {
    const movieId = req.params.id;

    const movie = await Movie.findOne({ id: movieId });
    if (movie) return res.send(movie);

    res.status(404).send("Sorry This Movie isn`t Available !");
  });
};
