var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    //If the user already has an account send them to the members page
    if (req.user) {
      res.render("home");
    }
    res.redirect("/login");
  });
  app.get("/login", (req, res) => {
    if (req.user) {
      res.render("home");
    }
    res.render("login");
  });
  app.get("/signup", (req, res) => {
    if (req.user) {
      res.render("home");
    }
    res.render("signup");
  });
};
