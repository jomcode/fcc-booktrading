import * as ActionTypes from '../constants';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isFetching: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      return Object.assign({}, state, {
        isAuthenticated: true,
        token,
        user
      });
    }

    case ActionTypes.LOGOUT: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        token: null,
        user: null,
        isAuthenticated: false
      });
    }

    case ActionTypes.LOGOUT_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    // case ActionTypes.RESET_LOGOUT: {}

    case ActionTypes.CHECK_TOKEN: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.CHECK_TOKEN_SUCCESS: {
      const { token, data } = action.payload;

      return Object.assign({}, state, {
        token: token.slice(),
        user: Object.assign({}, data),
        isAuthenticated: true,
        isFetching: false
      });
    }

    case ActionTypes.CHECK_TOKEN_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }

    // case ActionTypes.RESET_CHECK_TOKEN: {}

    default:
      return state;
  }
};

export default auth;
