// Module dependencies go here
var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config')();
var app = express();
// References to views go here

// Make reference to config setup in connect callback
MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/greatnotgoodreads', function (err, db) {
  if (err) {
    console.log('There is no mongo db server running');
  } else {
    var attachDB = function(request, response, next) {
      // Populate db property of request object
      request.db = db;
      next();
    }; 
    http.createServer(app).listen(config.port, function() {
      console.log('Express server listening on port ' + config.port);
    });
  }
});