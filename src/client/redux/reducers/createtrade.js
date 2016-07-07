import * as ActionTypes from '../constants';

const initialState = {
  requestedBook: {},
  isCreated: false
};

const createTrade = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_REQUESTED_BOOK: {
      const { payload: { requestedBook } } = action;
      return Object.assign({}, state, { requestedBook });
    }

    case ActionTypes.TRADE_REQUEST_SUCCESS: {
      return Object.assign({}, state, { isCreated: true });
    }

    case ActionTypes.RESET_TRADE_REQUEST: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default createTrade;
