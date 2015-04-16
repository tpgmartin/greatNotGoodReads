var express = require('express');
var routes = require('./handlers');
var users = require('./handlers/users');
var userRouter = express.Router();
var books = require('./handlers/books');
var bookRouter = express.Router();
var redirects = require('./handlers/redirects');

// Namespace users
userRouter.get('/', users.index);
userRouter.get('/user', users.profile);

// Namespace books
// bookRouter.get('/', books.index);

module.exports = function(app) {

  app.get('/', routes.index);
  app.use('/user', userRouter);
  app.use('/book', bookRouter);
  app.get('*', redirects.notFound);

};