const express = require("express");
const router = express.Router();
const db = require("../models");

// localhost:3000/api/profiles/find/:id
router.get("/find/:id", (req, res) => {
  // access the Profile table and find all results where the UserId matches..
  // the id passed in the request
  db.Profile.findAll({
    where: { UserId: req.params.id },
    // this line means we'll get the associated user with the results
    include: [db.User],
  }).then((profile) => {
    // return the results from the server
    res.send(profile);
  });
});

// localhost:3000/api/profiles/new
router.post("/new", (req, res) => {
  // create a new profile entry with the following parameters
  db.Profile.create({
    name: req.body.name,
    UserId: req.body.userId,
  }).then((newProfile) => {
    // return the results from the server
    res.send(newProfile);
  });
});

module.exports = router;
