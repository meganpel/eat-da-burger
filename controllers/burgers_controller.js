var path = require("path");
var orm = require(path.join(__dirname, "../config/orm.js"));

module.exports = function(app) {
  app.get("/", function(req, res) {
    orm.selectAll().then(burgers => {
      res.render('index', {burgers: burgers});
    });
  });

  app.post("/", function(req, res) {
    if (req.body.id != null) {
      orm.updateOne(req.body.id).then(result => {
        orm.selectAll().then(burgers => {
          res.render('index', {burgers: burgers});
        });
      });
    }

    if (req.body.burger_name != null) {
      orm.insertOne(req.body.burger_name).then(result => {
        orm.selectAll().then(burgers => {
          res.render('index', {burgers: burgers});
        });
      });
    }
  });
};