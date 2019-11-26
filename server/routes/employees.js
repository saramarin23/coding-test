const router = require("express").Router();
const promise = require("../index");

router.get("/employees", (req, res) => {
  res.send(promise);
});

module.exports = router;
