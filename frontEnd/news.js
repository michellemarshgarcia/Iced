console.log("hello");

var queryUrl = "https://newsapi.org/v2/everything?sources=cnn&q=immigration&apiKey=2f387cab32de4adeaeca04e9a581813b"
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).done(function(response) {
      console.log(response)

      for (var i = 0; i < 4; i++) {
        var newStory = $("<p>" + "<br>");
          newStory.append("<a href='" + response.articles[i].url + "'>" + response.articles[i].title + "<br>" + response.articles[i].author + "</a>");
          $(".news").append(newStory);
              }
      })

/*$(document).ready(function() {
  $.ajax({
    url: "/api/news",
    method: "GET"
  }).done(function(response) {
    console.log(response)
  })
})*/




// var NewsAPI = require ('newsapi');
// var newsapi = new NewsAPI('2f387cab32de4adeaeca04e9a581813b');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// /*newsapi.v2.topHeadlines({
//   sources: 'cnn-news',
//   q: 'immigration',
//   category: 'immigration',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// //});
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'immigration',
//   sources: 'cnn-news the-washington-post',
//   domains: 'cnn.com, washingtonpost.com',
//   from: '2017-12-01',
//   to: '2018-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
  
//  //   {
//    //   status: "ok",
//      // articles: [...]
//     //}
  
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'immigration',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
  
//     // {
//     //   status: "ok",
//     //   sources: [...]
//     // }
  
// });