module.exports = app => {
  app.post("/auth", (req, res) => {
    console.log(req.data);
  });
};
