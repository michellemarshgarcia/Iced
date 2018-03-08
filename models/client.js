// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var client = {
  all: function(cb) {
    orm.all("clients", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("clients", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("clients", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (Controller.js).
module.exports = client;