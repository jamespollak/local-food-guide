var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  debugger;
  res.render("index", { title: "YOUR GLOBAL LOCAL FOOD GUIDE" });
});

router.get("/welcome", function(req, res, next) {
  debugger;
  res.render("welcome");
});

router.get("/about", function(req, res, next) {
  debugger;
  res.render("about");
});

module.exports = router;
