const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

// ===> Models
require("./models/User");

// ===> connect to the db
mongoose.connect(keys.mongoURI);

const app = express();

// Google OAtuh Strategy
require("./services/passport");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// App Routes!
require("./routes/googleAuthRoutes")(app);
require("./routes/authRouter")(app);

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
