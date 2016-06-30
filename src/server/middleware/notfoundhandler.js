const errors = require('feathers-errors');

module.exports = function initNotFound() {
  return function notFoundMiddleware(req, res, next) {
    next(new errors.NotFound('Page not found'));
  };
};
