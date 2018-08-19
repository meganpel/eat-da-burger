var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "",
  port: 0,
  user: "",
  password: "",
  database: ""
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
});

module.exports = connection;