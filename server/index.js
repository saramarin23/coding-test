//Importamos dependencias
const express = require("express");
const dotenv = require("dotenv");
//const mongoose = require("mongoose");
const path = require("path");
const requestPromise = require("request-promise");

// dotenv.config();
const app = express();

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

//Accedemos al endpoint
const promise = requestPromise
  .get({
    uri: process.env.ENDPOINT,
    headers: {
      Authorization: process.env.PASSWORD
    },
    json: true,
    qs: {
      page: 1,
      page_size: 10
    }
  })
  .then(function ok(jsonData) {
    //   console.log(jsonData); //console.log o console.dir??
    console.log(jsonData);
    return jsonData;
  });

const index = require("./routes/index");
app.use("/", index);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

module.exports = app;
