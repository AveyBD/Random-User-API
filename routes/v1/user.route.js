const express = require("express");
const { randomUsers } = require("../../controllers/user.controller");
const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.send("Ki Chai?");
});

userRouter.route("/random").get(randomUsers);
module.exports = userRouter;
