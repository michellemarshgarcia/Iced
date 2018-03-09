var db = require("../models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    res.send("Hi there!");

    // db.Contact.findAll({}).then(function(contacts) {
    //   res.json(contacts);
    // });

    // user.all(function(data) {
    //   var hbsObject = {
    //     users: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    // });
  });

  app.post("/api/users", function(req, res) {
    // user.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
  });

  app.put("/api/users/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    // user.update(
    //   {
    //     type: req.body.type
    //   },
    //   condition,
    //   function(result) {
    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();

    //   }
    // );
  });
}
