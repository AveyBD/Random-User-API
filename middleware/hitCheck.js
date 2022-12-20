module.exports.hitCheck = (req, res, next) => {
  console.log(req.path);
  next();
};
