const router = require("express").Router();
const passport = require("passport");
const auth = require("./auth");

router.get("/", auth.required, function(req, res, next) {
  res.json("GET /user");
});

module.exports = router;
