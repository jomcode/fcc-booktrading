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

// Login
const login = (email, password) => app.authenticate({
  type: 'local',
  email,
  password
});

// Check for existing valid token
const checkToken = () => app.authenticate();

// Logout
const logout = () => app.logout();

// Get books
const getGoogleBooks = () => {
  const googleBooks = app.service('googlebooks');
  return googleBooks.find();
};

const service = {
  login,
  checkToken,
  logout,
  getGoogleBooks
};

export default service;
