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

module.exports = app;
