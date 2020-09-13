const express = require("express");
const router = express.Router();
const db = require("../models");

// localhost:3000/api/posts/find/:id
router.get("/find/:id", (req, res) => {
  // find all posts where the the UserId matches the given id
  db.Post.findAll({
    where: { UserId: req.params.id },
    // this line is how we get the associated user from the server
    include: [db.User],
  }).then((userPosts) => {
    // return the results from the server
    res.send(userPosts);
  });
});

// localhost:3000/api/posts/new
router.post("/new", (req, res) => {
  // create a new post with the following parameters
  db.Post.create({
    text: req.body.text,
    UserId: req.body.userId,
  }).then((newPost) => {
    // return the results from the server
    res.send(newPost);
  });
});

module.exports = router;
