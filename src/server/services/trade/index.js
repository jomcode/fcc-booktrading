const service = require('feathers-mongoose');

const TradeModel = require('./trademodel');
const hooks = require('./hooks');

module.exports = function initTrade() {
  const app = this;

  app.use('/trades', service({
    Model: TradeModel
  }));

  const tradeService = app.service('/trades');

  tradeService.before(hooks.before);
  tradeService.after(hooks.after);
};
