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
const getGoogleBooks = (params) => {
  const bookService = app.service('books');
  return bookService.find(params);
};

// Get books from all users
// TODO
const getAllUserBooks = () => {};

// Get books for owner (user's books)
// TODO
const getAllOwnerBooks = () => {};

const service = {
  createUser,
  logUserIn,
  checkToken,
  logout,
  editUserProfile,
  getGoogleBooks,
  getAllUserBooks,
  getAllOwnerBooks
};

export default service;
