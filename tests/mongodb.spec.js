describe("MongoDB", function () {
  it("there should be a server running", function (next) {
    var MongoClient = require('mongodb').MongoClient;
    // Callback in connect receives a `db` object
    // Avoid making a new MongoClient object for every database request - move express
    // server inside callback of connect function
    MongoClient.connect("mongodb://127.0.0.1:27017/greatnotgoodreads", function (err, db) {
      expect(err).toBe(null);
      next()
    });
  });
});