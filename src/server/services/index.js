const authentication = require('./authentication');
const users = require('./user');
const googleBooks = require('./googlebooks');

module.exports = function bootstrapServices() {
  const app = this;

  app.configure(authentication);
  app.configure(users);
  app.configure(googleBooks);
};
