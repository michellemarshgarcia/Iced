// Import the ORM to create functions that will interact with the database.
var user = require("../config/connections.js");

var client = {
  all: function(cb) {
    user.all("clients", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    user.create("clients", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    user.update("clients", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (client.js).
module.exports = client;