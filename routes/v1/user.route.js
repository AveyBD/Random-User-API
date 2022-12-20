const express = require("express");
const {
  randomUsers,
  allUser,
  saveSingleUser,
  updateSingleUser,
} = require("../../controllers/user.controller");

const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.send("Ki Chai?");
});

userRouter.route("/random").get(randomUsers);
userRouter.route("/all").get(allUser);
userRouter.route("/save").post(saveSingleUser);
userRouter.route("/update").patch(updateSingleUser);
module.exports = userRouter;
/**
 * @swagger
 * /user/all:
 *   get:
 *     summary: Retrieve a list of all users.
 *     tags:
 *     - User API
 *     description: Retrieve a list of users from the list
 *     parameters:
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        required: false
 *        description: Numeric ID ot limit the user per page.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Halum Bhai
 *                       address:
 *                         type: string
 *                         description: The user's address.
 *                         example: Sundarban
 *                       description:
 *                         type: string
 *                         description: The user's description.
 *                         example: Halum Bhai is a bagh
 */
/**
 * @swagger
 * /user/random:
 *   get:
 *     summary: Retrieve information of a random user.
 *     tags:
 *     - User API
 *     description: Retrieve information of a random user
 *     responses:
 *       200:
 *         description: A random single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Halum Bhai
 *                       address:
 *                         type: string
 *                         description: The user's address.
 *                         example: Sundarban
 *                       description:
 *                         type: string
 *                         description: The user's description.
 *                         example: Halum Bhai is a bagh
 */
