const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const User = mongoose.model("users");
const Movie = mongoose.model("movies");

module.exports = app => {
  // Adding / Removing Movies or Tv shows from user`s WatchList
  app.post("/api/movies/watchlist", requireLogin, async (req, res) => {
    // add or remove a movie from user`s watchList
    const movieId = req.body.movieId;
    const user = await User.findOne({ _id: req.user._id });
    const movie = await Movie.findOne({ id: movieId }).select(
      "id title poster_path"
    );

    if (req.body.action === "add") {
      user.watchList.push(movie);
    } else {
      const newWatchList = user.watchList.filter(movie => {
        movie.id != movieId;
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
