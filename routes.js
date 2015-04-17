var express = require('express');
var routes = require('./handlers');
var users = require('./handlers/users');
var userRouter = express.Router();
var books = require('./handlers/books');
var bookRouter = express.Router();
var redirects = require('./handlers/redirects');

// Namespace users
userRouter.route('')
  .get(users.index)
  .post(users.create);
userRouter.route('/:id')
  .get(users.profile)
  .put(users.edit)
  .delete(users.delete);

// Namespace books
bookRouter.route('')
  .get(books.index)
  .post(books.create);
bookRouter.route('/:id')
  .get(books.profile)
  .put(books.edit)
  .delete(books.delete);

module.exports = function(app) {

  app.get('/', routes.index);
  app.use('/user', userRouter);
  app.use('/book', bookRouter);
  app.get('*', redirects.notFound);

};