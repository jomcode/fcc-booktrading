const authentication = require('./authentication');
const users = require('./user');
const googleBooks = require('./googlebooks');
const book = require('./book');
const trade = require('./trade');

module.exports = function bootstrapServices() {
  const app = this;

  app.configure(authentication);
  app.configure(users);
  app.configure(googleBooks);
  app.configure(book);
  app.configure(trade);
};
