var connection = require('./connection.js');

exports.selectAll = function() {
  return new Promise(function(resolve, reject) {
    connection.query("SELECT * FROM burgers", function (err, results) {
      if (err) {
        return reject(err);
      }

      results = JSON.parse(JSON.stringify(results));

      resolve(results);
    });
  });
};

exports.insertOne = function(burgerName) {
  return new Promise(function(resolve, reject) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)", [burgerName], function (err, results) {
      if (err) {
        return reject(err);
      }

      resolve(results);
    });
  });
};

exports.updateOne = function(id) {
  return new Promise(function(resolve, reject) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      resolve(results);
    });
  });4
};
