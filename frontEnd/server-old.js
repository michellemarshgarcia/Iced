// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var NewsAPI = require ('newsapi');
var newsapi = new NewsAPI('2f387cab32de4adeaeca04e9a581813b');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


app.get("/api/news", function(req, res) {
  newsapi.v2.everything({
  q: 'immigration',
  sources: 'cnn-news the-washington-post',
  domains: 'cnn.com, washingtonpost.com',
  from: '2017-12-01',
  to: '2018-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(res => {
  console.log(res);
  res.json(res)
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
