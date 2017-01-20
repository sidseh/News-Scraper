// // Dependencies:

// // Snatches HTML from URLs
// var request = require("request");
// // Scrapes our HTML
var cheerio = require("cheerio");
// var express = require("express");
// var bodyParser = require("body-parser");
var mongojs = require("mongojs");
// var mongoose = require('mongoose');
// var path = require('path');
// var app = express();


// // Mongojs configuration
var databaseUrl = "mongodb://heroku_jcjhxvx7:lqtl09e8vbn1igrke2p@ds127878.mlab.com:27878/heroku_jcjhxvx7";
var collections = ["newsStories"];


// // Hook our mongojs config to the db var


var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});




module.exports = db;

// app.listen(3001, function() {
// 	console.log("App running on port: 3001!");
// });