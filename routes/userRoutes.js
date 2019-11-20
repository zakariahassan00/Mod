const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const bcrypt = require("bcrypt");
const { validateUser } = require("../models/User");
const _ = require("lodash");
const auth = require("../middlewares/auth");

const User = mongoose.model("users");
const Movie = mongoose.model("movies");

module.exports = app => {
  app.post("/api/user/register", async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Email already registered");
    user = new User(_.pick(req.body, ["email", "password", "name"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    console.log(token);

    res.header("x-auth-token", token).send(_.pick(user, ["email", "name"]));
  });

  // Adding / Removing Movies or Tv shows from user`s WatchList
  app.post("/api/user/watchlist", requireLogin, async (req, res) => {
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
        return movie.id != movieId;
      });

      user.watchList = newWatchList;
    }

    await user.save();
    res.send(user);
  });

  // Movies Rating System
  app.post("/api/user/rate", requireLogin, async (req, res) => {
    let rated = false;
    // add or edit users rate
    const user = await User.findOne({ _id: req.user._id });
    const movie = await Movie.findOne({ id: req.body.id }).select(
      "id title poster_path"
    );

    // if user rated 0 that means delete the rate
    if (req.body.rate == 0) {
      const newRateList = user.rateList.filter(content => {
        return content.item.id != req.body.id;
      });

      user.rateList = newRateList;
      await user.save();
      return res.send(user);
    }

    // search for the content(Movie or Tv Show) and edit the rate
    const newRateList = user.rateList.map(content => {
      if (content.item.id == req.body.id) {
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
    if (!rated && movie) {
      let newMovieRate = { item: movie, rate: req.body.rate };
      user.rateList.push(newMovieRate);
    }

    await user.save();

    res.send(user);
  });

  // add or remove a movie from user`s favorites
  app.post("/api/user/favorites", requireLogin, async (req, res) => {
    const movieId = req.body.id;
    const user = await User.findOne({ _id: req.user._id });
    const movie = await Movie.findOne({ id: movieId }).select(
      "id title poster_path"
    );

    if (req.body.action === "add") {
      user.favorites.push(movie);
    } else {
      const newFavoritesList = user.favorites.filter(movie => {
        return movie.id != movieId;
      });

      user.favorites = newFavoritesList;
    }

    await user.save();
    res.send(user);
  });

  // ======> Get Requests <======
  // User Favorites List
  app.get("/api/user/watchlist", async (req, res) => {
    const page = req.query.page;
    const perPage = 20;
    const user = await User.findOne({ _id: req.user._id });
    const count = user.watchList.length;
    const watchlist = [];
    let startIndex = perPage * (page - 1);
    let endIndex = perPage * page;
    let maxIndex = count;
    let maxPages = Math.ceil(count / perPage);

    if (page > maxPages) return res.send({ items: [], count });

    for (let i = startIndex; i < endIndex && i < maxIndex; i++)
      watchlist.push(user.watchList[i]);

    res.send({ items: watchlist, count });
  });

  // User Favorites List
  app.get("/api/user/favorites", async (req, res) => {
    const page = req.query.page;
    const perPage = 20;
    const user = await User.findOne({ _id: req.user._id });
    const count = user.favorites.length;
    const favorites = [];
    let startIndex = perPage * (page - 1);
    let endIndex = perPage * page;
    let maxIndex = count;
    let maxPages = Math.ceil(count / perPage);

    if (page > maxPages) return res.send({ items: [], count });

    for (let i = startIndex; i < endIndex && i < maxIndex; i++) {
      favorites.push(user.favorites[i]);
    }

    res.send({ items: favorites, count });
  });

  // User rate List
  app.get("/api/user/ratelist", async (req, res) => {
    const page = req.query.page;
    const perPage = 20;
    const user = await User.findOne({ _id: req.user._id });
    const count = user.rateList.length;
    const ratelist = [];
    let startIndex = perPage * (page - 1);
    let endIndex = perPage * page;
    let maxIndex = count;
    let maxPages = Math.ceil(count / perPage);

    if (page > maxPages) return res.send({ items: [], count });

    for (let i = startIndex; i < endIndex && i < maxIndex; i++)
      ratelist.push(user.rateList[i]);

    res.send({ items: ratelist, count });
  });

  app.get("/api/user/me", function(req, res) {
    var token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "No token provided." });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });

      res.status(200).send(decoded);
    });
  });
};
