import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  isSuccessful: false
};

const acceptTrade = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ACCEPT_TRADE: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.ACCEPT_TRADE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.ACCEPT_TRADE_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_ACCEPT_TRADE: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default acceptTrade;
