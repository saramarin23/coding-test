//Importamos dependencias
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

// dotenv.config();
const app = express();

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

//Conectamos mongoose con nuestra base de datos
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // , () => console.log("connected to db!!"

  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const index = require("./routes/index");
app.use("/", index);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
