const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

const swapBooks = hook => {
  const bookService = hook.app.service('books');

  const sentBy = hook.result.sentBy.slice();
  const receivedBy = hook.result.receivedBy.slice();
  const requestedBook = Object.assign({}, hook.result.requestedBook);
  const proposedBook = Object.assign({}, hook.result.proposedBook);

  const firstSwap = () =>
    bookService.patch(requestedBook.bookId, { ownerId: sentBy });

  const secondSwap = () =>
    bookService.patch(proposedBook.bookId, { ownerId: receivedBy });

  return Promise.all([firstSwap(), secondSwap()]).then(() => hook);
};

module.exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [
    swapBooks
  ],
  remove: []
};
