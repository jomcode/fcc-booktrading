'use strict';
const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  // find(params) {}
  // get(id, params) {}
  // create(data, params) {}
  // update(id, data, params) {}
  // patch(id, data, params) {}
  // remove(id, params) {}
}

module.exports = function initBook() {
  const app = this;

  app.use('/book', new Service());

  const bookService = app.service('/book');

  bookService.before(hooks.before);
  bookService.after(hooks.after);
};

module.exports.Service = Service;
