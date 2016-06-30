const authentication = require('./authentication');
const users = require('./user');

module.exports = function bootstrapServices() {
  const app = this;

  app.configure(authentication);
  app.configure(users);
};
