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

  // now we have the code now authenticatete
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/google/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
