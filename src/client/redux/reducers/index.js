import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import googleBooks from './googlebooks';

const rootReducer = combineReducers({
  auth,
  googleBooks,
  routing: routerReducer
});

export default rootReducer;
