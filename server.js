var express = require("express");
var expressHandlebars = require('express-handlebars');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 4000;

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './public')));

require(path.join(__dirname, "./controllers/burgers_controller.js"))(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});