const express = require("express");
const router = express.Router();
const db = require("../models");

// localhost:3000/api/users/all
router.get("/all", (req, res) => {
  // access the User table and find all users
  db.User.findAll({
    // This is how we join tables in the request.
    // without this line, you'd have to make individual calls to each model
    include: [db.Profile, db.Post],
  }).then((users) => {
    // return all users
    res.send(users);
  });
});

// localhost:3000/api/users/new
router.post("/new", (req, res) => {
  // create a new user with the following parameters
  db.User.create({
    username: req.body.userName,
  }).then((newUser) => {
    // return the response from the server
    res.send(newUser);
  });
});

module.exports = router;
