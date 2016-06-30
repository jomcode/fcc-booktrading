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

module.exports = function initTrade() {
  const app = this;

  app.use('/trade', new Service());

  const tradeService = app.service('/trade');

  tradeService.before(hooks.before);
  tradeService.after(hooks.after);
};

module.exports.Service = Service;
