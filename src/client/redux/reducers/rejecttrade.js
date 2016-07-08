import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  isSuccessful: false
};

const rejectTrade = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REJECT_TRADE: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.REJECT_TRADE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.REJECT_TRADE_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_REJECT_TRADE: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default rejectTrade;
