var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var express = require("gulp-express");

gulp.task("server", function () {
  express.run(["app.js"]);

  gulp.watch("app.js");
});