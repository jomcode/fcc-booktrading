const service = require('feathers-mongoose');

const BookModel = require('./bookmodel');
const hooks = require('./hooks');

module.exports = function initUser() {
  const app = this;

  app.use('/books', service({
    Model: BookModel
  }));

  const userService = app.service('/books');

  userService.before(hooks.before);
  userService.after(hooks.after);
};
