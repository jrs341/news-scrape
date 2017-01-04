
// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");

// First, tell the console what server.js is doing
console.log("\n******************************************\n" +
            "Look at the Victoria Advocate main story \n" +
            "Then, grab the headline and link to the story\n" +
            "\n******************************************\n");


// Run request to grab the HTML from Victoria Advocate website news section
request("https://www.victoriaadvocate.com/news/local-news/", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  var result = [];

  $("section[id=lead-section-content]").each(function(i, element) {

    var newsLink = $(element).find("a").attr("href");
    var newsTitle = $(element).find("a").attr("title");

    // Push the image's URL (saved to the imgLink var) into the result array
    result.push({ Link: newsLink,
                  Title: newsTitle
                });
  });

  // With each link scraped, log the result to the console
  console.log(result);
});