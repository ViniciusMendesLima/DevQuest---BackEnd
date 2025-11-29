const express = require("express");
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("Caiu na tora raiz de postagens");
});

postRouter.get("/save", (req, res) => {
  res.send("Caiu na tora save de postagens");
});

module.exports = postRouter;
