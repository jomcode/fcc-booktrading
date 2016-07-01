import * as ActionTypes from '../constants';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isFetching: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {}
    case ActionTypes.LOGIN_SUCCESS: {}
    case ActionTypes.LOGIN_FAILURE: {}
    case ActionTypes.RESET_LOGIN: {}

    case ActionTypes.LOGOUT: {}
    case ActionTypes.LOGOUT_SUCCESS: {}
    case ActionTypes.LOGOUT_FAILURE: {}
    case ActionTypes.RESET_LOGOUT: {}

    case ActionTypes.CHECK_TOKEN: {}
    case ActionTypes.CHECK_TOKEN_SUCCESS: {}
    case ActionTypes.CHECK_TOKEN_FAILURE: {}
    case ActionTypes.RESET_CHECK_TOKEN: {}

    default:
      return state;
  }
};

export default auth;
