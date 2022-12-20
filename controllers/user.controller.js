const allUsers = require("../util/list.json");
module.exports.randomUsers = (req, res, next) => {
  console.warn("Random User's Information Requested");
  res.send(allUsers[Math.floor(Math.random() * allUsers.length + 1)]);
};
module.exports.allUser = (req, res, next) => {
  console.log("All user requested");
  res.send(allUsers);
};
