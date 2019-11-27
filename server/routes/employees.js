const router = require("express").Router();
const rp = require("request-promise");

router.get("/employees", (req, res) => {
  const options = {
    uri: process.env.ENDPOINT,
    headers: {
      Authorization: process.env.PASSWORD
    },
    json: true,
    qs: {
      page: 1,
      page_size: 10
    }
  };

  rp(options).then(function(jsonData) {
    res.json(jsonData);
    return jsonData;
  });
});

module.exports = router;
