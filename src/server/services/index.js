const authentication = require('./authentication');
const users = require('./user');
const book = require('./book');
const trade = require('./trade');

module.exports = function bootstrapServices() {
  const app = this;

  app.configure(authentication);
  app.configure(users);
  app.configure(book);
  app.configure(trade);
};
