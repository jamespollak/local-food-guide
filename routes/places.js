var express = require("express");
var router = express.Router();
const User = require("../models/User");
const Places = require("../models/Places");

/* GET places. */
router.get("/", function(req, res, next) {
  res.render("places");
});

module.exports = router;
