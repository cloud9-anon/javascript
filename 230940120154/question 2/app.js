const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var routes = require("./routes/router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(9091, function () {
  console.log("server started at port 9090");
});
module.exports = app;
