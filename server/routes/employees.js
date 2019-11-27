const router = require("express").Router();
const rp = require("request-promise");
const mcache = require("memory-cache");

var cache = duration => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.urlencoded;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

router.get("/employees", cache(200), (req, res) => {
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
