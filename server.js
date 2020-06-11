var logger = require("morgan");
var mongoose = require("mongoose");
var express = require("express");
var cheerio = require("cheerio")
var axios = require("axios")

var db = require("./models")

var PORT = process.env.PORT || 3000;

var app = express();
















app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });