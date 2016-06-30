const authentication = require('feathers-authentication');

module.exports = function initAuthentication() {
  const app = this;

  const config = app.get('auth');

  app.configure(authentication(config));
};
