// http://docs.feathersjs.com/middleware/error-handling.html#catching-global-server-side-errors
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
const mongoose = require('mongoose');

const app = require('./app');
const port = app.get('port');

mongoose.Promise = global.Promise;

mongoose.connect(app.get('mongodb'), (err, res) => {
  if (err) {
    return console.error(err);
  }
  return console.log('mongoose connected');
});

const server = app.listen(port);

server.on('listening', () => console.log(`listening on ${port}`));
