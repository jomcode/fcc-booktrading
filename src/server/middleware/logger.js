const winston = require('winston');

module.exports = function initLogger(app) {
  /* eslint-disable no-param-reassign */
  app.logger = winston;
  /* eslint-enable no-param-reassign */

  return function loggerMiddleware(error, req, res, next) {
    if (error) {
      const message = `${error.code ? `(${error.code}) ` : ''}Route: ${req.url} - ${error.message}`;

      if (error.code === 404) {
        winston.info(message);
      }
      else {
        winston.error(message);
        winston.info(error.stack);
      }
    }

    next(error);
  };
};
