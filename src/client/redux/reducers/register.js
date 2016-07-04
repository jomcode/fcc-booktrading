import * as ActionTypes from '../constants';

const initialState = {
  isSuccessful: false,
  isFetching: false
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.REGISTER_USER_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.REGISTER_USER_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_REGISTER_USER: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default register;
