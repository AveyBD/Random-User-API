const fs = require("fs");
const allUsers = require("../util/list.json");
module.exports.randomUsers = (req, res, next) => {
  console.warn("Random User's Information Requested");
  res.send(allUsers[Math.floor(Math.random() * allUsers.length + 1)]);
};
module.exports.allUser = (req, res, next) => {
  console.log("All user requested");
  if (req.query?.limit >= 1) {
    console.log(req.query.limit);
    res.send(allUsers.slice(0, Number(req.query.limit)));
  } else {
    res.send(allUsers);
  }
};

module.exports.saveSingleUser = (req, res, next) => {
  console.log("Got Post Request!");
  var data = req.body;
  data.id = allUsers.length + 1;
  allUsers.push(data);
  fs.writeFileSync("./util/list.json", JSON.stringify(allUsers));
  res.status(200).send("Data Saved");
};
