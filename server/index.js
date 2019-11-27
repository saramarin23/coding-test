//Importamos dependencias
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mcache = require("memory-cache");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();

//config middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000" || "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const index = require("./routes/index");
app.use("/", index);

const employees = require("./routes/employees");
app.use("/data", employees);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

module.exports = app;
