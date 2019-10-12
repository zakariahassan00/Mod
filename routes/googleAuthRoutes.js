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

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/cu", (req, res) => {
    res.send(req.user);
  });
};
