var db = require("../models");

module.exports = function(app) {
  // Create all our routes and set up logic within those routes where required.

  app.get("/test/:clientId", function(req, res) {
    //res.send("Hi there!");
    db.Contact.findAll({
      where: {
        clientId: req.params.clientId
      }
    }).then(function(contacts) {
      res.json(contacts);
    })
  });


    app.post("/api/clients", function(req, res) {
      // user.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
      //   // Send back the ID of the new quote
      //   res.json({ id: result.insertId });
      // });
      console.log(req.body);
      db.Client.create(req.body).then(function(newClient) {
        console.log("New Client: ");
        console.log(newClient);
       // res.redirect("/api/contacts");
       res.end();
      });
    });


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
 // });

  app.post("/api/contacts", function(req, res) {
    // user.create(["name", "email", "phone", "type"], [req.body.name, req.body.email, req.body.phone, req.body.type], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });
    db.Contact.create(req.body).then(function(newContact) {
      console.log("New Contact: ");
      console.log(newContact);
     // res.redirect("/api/contacts");
     res.end();

    });
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

  app.get("/api/contacts", function(req, res) {
    Contact.findAll({
      where: {
        phone: {
          $ne: null
        }
      }
    }).then(function(phone) {
      res.json(phone);
    
    });


  });


  app.post("/sendalert", function(req, res) {
    var accountSid = 'ACd81bf947a5dd7bb7d5783ae98246872b';
    var authToken = 'e4c243b27f287ab754769308dae8331a';

    // require the Twilio module and create a REST client
    var clientContact = require('twilio')(accountSid, authToken);

    clientContact.messages.create(
      {
        to: "+17202983511",
        from: '+13347815558',
        body: 'Hello this is an alert from immigration service ICED. ' + "Roberto" + ' has been detained by ICE.',
      },
      (err, message) => {
        console.log(err, message);
      }
    );
  });


}
