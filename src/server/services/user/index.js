const service = require('feathers-mongoose');

const UserModel = require('./usermodel');
const hooks = require('./hooks');

module.exports = function initUser() {
  const app = this;

  app.use('/users', service({
    Model: UserModel
  }));

  const userService = app.service('/users');

  userService.before(hooks.before);
  userService.after(hooks.after);
};
