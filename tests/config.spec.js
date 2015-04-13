describe("Configuration setup", function () {
  it("should load local configurations", function (next) {
    var config = require('../config')();
    expect(config.mode).toBe('local');
    next();
  });
  it("should load dev configurations", function (next) {
    var config = require('../config')('dev');
    expect(config.mode).toBe('dev');
    next();
  });
  it("should load local configurations", function (next) {
    var config = require('../config')('prod');
    expect(config.mode).toBe('prod');
    next();
  });
});