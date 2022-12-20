const express = require("express");
const { randomUsers, allUser } = require("../../controllers/user.controller");
const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.send("Ki Chai?");
});

userRouter.route("/random").get(randomUsers);
userRouter.route("/all").get(allUser);
module.exports = userRouter;
