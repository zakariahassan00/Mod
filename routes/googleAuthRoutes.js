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
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/google/logout", (req, res) => {
    console.log(req.logout);
    req.logout();
    res.redirect("/");
  });
};
