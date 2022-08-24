const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const users = require("../users");

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const user = users.find((user) => user.slug === slug);

  if (user) {
    res.json(user.slug);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/", (req, res) => {
  const user = {
    slug: req.body.slug,
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    city: req.body.city,
    picture: req.body.picture,
  };

  users.push(user);
  res.json(user);
});

module.exports = app;
