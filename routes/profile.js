var express = require("express");
var router = express.Router();
const User = require("../models/User");

//Profile of logged in user
router.get("/", (req, res) => {
  User.findById(req.session.users._id)
    .populate("places")
    .then(user => {
      res.render("profile", { user: user });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
