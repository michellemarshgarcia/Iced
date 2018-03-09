// Import the ORM to create functions that will interact with the database.
var user = require("../config/connections.js");

var contact = {
  all: function(cb) {
    user.all("contacts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    user.create("contacts", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    user.update("contacts", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = contact;