// http://docs.feathersjs.com/middleware/error-handling.html#catching-global-server-side-errors
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

const app = require('./app');
const port = app.get('port');

const server = app.listen(port);

server.on('listening', () => console.log(`listening on ${port}`));
