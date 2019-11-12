const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

// ===> Models
require("./models/User");
require("./models/Movie");

// ===> connect to the db
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
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
require("./routes/userRoutes")(app);
require("./routes/moviesRoutes")(app);
// require("./routes/authRouter")(app);

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
