const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Movie = mongoose.model("movies");
const User = mongoose.model("users");

module.exports = app => {
  // app.post("/api/movies/add", (req, res) => {
  // const movie = req.body;
  // new Movie({
  //   id: movie.id,
  //   title: movie.title,
  //   original_title: movie.original_title,
  //   genres: movie.genres,
  //   vote_average: movie.vote_average,
  //   poster_path: movie.poster_path,
  //   backdrop_path: movie.backdrop_path,
  //   release_date: movie.release_date,
  //   popularity: movie.popularity,
  //   vote_count: movie.vote_count,
  //   adult: movie.adult,
  //   original_language: movie.original_language,
  //   overview: movie.overview,
  //   cast: movie.cast,
  //   crew: movie.crew,
  //   video: movie.results,
  //   runtime: movie.runtime,
  //   status: movie.status,
  //   tagline: movie.tagline,
  //   homepage: movie.homepage,
  //   budget: movie.budget,
  //   revenue: movie.revenue
  // }).save();

  // res.send({});
  // });

  // return all Movies in the DB
  app.get("/api/movies/all", async (req, res) => {
    let page = req.param("page");
    let perPage = 20;

    // const count = await Movie.count();

    const allMovies = await Movie.find()
      .select("id poster_path title")
      .limit(perPage)
      .skip((page - 1) * perPage);

    res.send(allMovies);
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

  app.get("/api/movies/:id", async (req, res) => {
    const movieId = req.params.id;

    const movie = await Movie.findOne({ id: movieId });
    if (movie) return res.send(movie);

    res.status(404).send("Sorry This Movie isn`t Available !");
  });

  // Adding / Removing Movies or Tv shows from user`s WatchList
  app.post("/api/movies/watchlist", requireLogin, async (req, res) => {
    // add or remove a movie from user`s watchList
    const user = await User.findOne({ _id: req.user._id });
    const movieId = req.body.movieId;

    if (req.body.action === "add") {
      user.watchList.push(movieId);
    } else {
      const newWatchList = user.watchList.filter(id => {
        id != movieId;
      });

      user.watchList = newWatchList;
    }

    await user.save();
    res.send(user);
  });

  // Rating Movies And Tv Shows System
  app.post("/api/movies/rate", requireLogin, async (req, res) => {
    // add or edit users rate
    const user = await User.findOne({ _id: req.user._id });
    let rated = false;

    // if user rated 0 that means delete the rate
    if (req.body.rate == 0) {
      const newRateList = user.rateList.filter(content => {
        content.id != req.body.id;
      });

      user.rateList = newRateList;
      await user.save();
      return res.send(user);
    }

    // search for the content(Movie or Tv Show) and edit the rate
    const newRateList = user.rateList.map(content => {
      if (content.id == req.body.id) {
        rated = true;
        content.rate = req.body.rate;
        return content;
      }
      return content;
    });

    // replace the old list with the new one
    user.rateList = [];
    user.rateList.push(...newRateList);

    // if the content not rated before, then add the rate
    if (!rated) {
      user.rateList.push(req.body);
    }

    await user.save();

    res.send(user);
  });

  // add or remove a movie from user`s favorites
  app.post("/api/movies/favorites", requireLogin, async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    const contentId = req.body.id;

    if (req.body.action === "add") {
      user.favorites.push(contentId);
    } else {
      const newFavoritesList = user.favorites.filter(id => {
        id != contentId;
      });

      user.favorites = newFavoritesList;
    }

    await user.save();
    res.send(user);
  });
};
