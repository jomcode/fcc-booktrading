import * as ActionTypes from '../constants';

const initialState = {
  isSuccessful: false,
  isFetching: false
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.LOGIN_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_LOGIN: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default logIn;
