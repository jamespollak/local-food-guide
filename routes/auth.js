var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10; // cost factor for producing the hash

//signup

router.post("/signup", (req, res) => {
  const { username, password, email } = req.body;
  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => {
      return User.create({
        username,
        password: hashedPassword,
        email
      });
    })
    .then(userCreated => {
      req.session.user = userCreated;
      res.redirect("/profile");
    })
    .catch(err => {
      console.log("err", err);
    });
});

//login

router.post("/login", (req, res, next) => {
  // const name = req.body.name;
  // const password = req.body.password;
  let currentUser;
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.redirect("/welcome");
        return false;
      } else {
        currentUser = user;
        return bcrypt.compare(req.body.password, user.password);
      }
    })
    .then(passwordCorrect => {
      if (passwordCorrect) {
        const session = req.session;
        session.user = currentUser;
        res.redirect("/profile");
        return;
      } else {
        res.send("Sorry, those credentials don't match.");
        return;
      }
    })
    .catch(err => {
      debugger;
      console.log("err", err);
    });
});

//logout

router.post("/logout", function(req, res, next) {
  res.render("/");
});

module.exports = router;
