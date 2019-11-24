// ESTO VA EN OTRA CARPETA:
//Let's change the app into a web server:
// const http = require("http"); //imports web server module

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello world");
// }); //CreateServer method of the http module to create a new web server. An event handler is registered to the server, that is called everytime an HTTP req is made to the server's address.

// const PORT = 5000;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);

//Importamos dependencias
const express = require("express");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");

dotenv.config();
const app = express();

//Conectamos mongoose con nuestra base de datos
// mongoose.connect({ useNewUrlParser: true, useUnifiedTopology: true }),
//   () => console.log("connected to db!!");

const index = require("./routes/index");
app.use("/", index);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
