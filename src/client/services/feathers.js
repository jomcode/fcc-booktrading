const feathers = require('feathers/client');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest/client');
const authentication = require('feathers-authentication/client');

const rootUrl = process.env.NODE_ENV === 'production' ?
  `${window.location.origin}` :
  'http://localhost:3030';

const app = feathers()
  .configure(rest(rootUrl).fetch(window.fetch.bind(window)))
  .configure(hooks())
  .configure(authentication({
    storage: window.localStorage,
    tokenKey: 'jom-booktrading-jwt'
  }));

// Create User
const createUser = (data) => {
  const userService = app.service('users');
  return userService.create(data);
};

// Log User In
const logUserIn = (email, password) => app.authenticate({
  type: 'local',
  email,
  password
});

// Check for existing valid token
const checkToken = () => app.authenticate();

// Logout
const logout = () => app.logout();

// Edit User Profile
const editUserProfile = (id, data) => {
  const userService = app.service('users');
  return userService.patch(id, data);
};

// Get books from google api
const getGoogleBooks = (query) => {
  const params = Object.assign({}, { query });
  const googleBooksService = app.service('googlebooks');
  return googleBooksService.find(params);
};

// Get books from all users
const getOtherUserBooks = (userId) => {
  const params = Object.assign({}, {
    query: { ownerId: { $ne: userId } }
  });
  const bookService = app.service('books');
  return bookService.find(params);
};

// Get books for owner (user's books)
const getAllOwnerBooks = (query) => {
  const params = Object.assign({}, { query });
  const bookService = app.service('books');
  return bookService.find(params);
};

// Save book to user
const saveUserBook = (data) => {
  const bookService = app.service('books');
  return bookService.create(data);
};

// Send trade request
const createTradeRequest = (data) => {
  const tradeService = app.service('trades');
  return tradeService.create(data);
};

// Get received trades
const getReceivedTradeRequests = (query) => {
  const tradeService = app.service('trades');
  const params = Object.assign({}, { query });

  return tradeService.find(params);
};

// Accept a trade
const acceptTrade = (tradeId) => {
  const tradeService = app.service('trades');
  return tradeService.patch(tradeId, { status: 'accepted' });
};

// Reject a trade
const rejectTrade = (tradeId) => {
  const tradeService = app.service('trades');
  return tradeService.patch(tradeId, { status: 'rejected' });
};

const service = {
  createUser,
  logUserIn,
  checkToken,
  logout,
  editUserProfile,
  getGoogleBooks,
  getOtherUserBooks,
  getAllOwnerBooks,
  saveUserBook,
  createTradeRequest,
  getReceivedTradeRequests,
  acceptTrade,
  rejectTrade
};

export default service;
