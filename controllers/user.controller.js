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
  console.log(req.body);
  var data = req.body;
  data.id = allUsers.length + 1;
  allUsers.push(data);
  fs.writeFileSync("./util/list.json", JSON.stringify(allUsers));
  res.status(200).send("Data Saved");
};

module.exports.updateSingleUser = (req, res, next) => {
  const data = req.body;
  const userId = Number(data?.id) - 1;
  if (userId) {
    console.log(allUsers[userId]);
    if (data.name) {
      allUsers[userId].name = data.name;
    } else if (data.address) {
      allUsers[userId].address = data.address;
    } else if (data.description) {
      allUsers[userId].description = data.description;
    }
    res.send("Updated");
  } else {
    res.send("user Not Found");
  }
  console.log(req.body);
};
