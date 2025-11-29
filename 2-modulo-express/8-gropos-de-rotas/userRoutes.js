const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Caiu na tora raiz de usuários");
});

module.exports = userRouter;
