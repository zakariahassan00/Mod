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
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

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
require("./routes/authRouter")(app);

// ====> DEPLOYMENT SETTINGS
// deployment with react app settings
if (process.env.NODE_ENV === "production") {
  // express will serve up production assets like our main.js file, or main.css file!.
  app.use(express.static("client/build"));

  // express will serve index.html if it doesn`t recogize te route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
