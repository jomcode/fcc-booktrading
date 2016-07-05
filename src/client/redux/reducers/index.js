import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import register from './register';
import logIn from './login';
import editProfile from './editprofile';
import bookBrowser from './bookbrowser';
import bookSearch from './booksearch';
import saveBook from './savebook';

const rootReducer = combineReducers({
  auth,
  register,
  logIn,
  editProfile,
  bookBrowser,
  bookSearch,
  saveBook,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
