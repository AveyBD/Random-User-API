const allUsers = require("../util/list.json");
module.exports.randomUsers = (req, res, next) => {
  console.warn("Random User's Information Requested");
  res.send(allUsers[Math.floor(Math.random() * allUsers.length + 1)]);
};
