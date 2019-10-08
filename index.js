const express = require("express");

const app = express();

// Google OAtuh Strategy
require("./services/passport");

// App Routes!
require("./routes/googleAuthRoutes")(app);

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
