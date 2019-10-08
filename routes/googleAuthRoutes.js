const passport = require("passport");

module.exports = app => {
  // Google OAuth routes!

  // get the code from google server
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"]
    })
  );

  // now we have the code now authenticate
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/google/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
