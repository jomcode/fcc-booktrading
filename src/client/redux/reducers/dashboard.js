import * as ActionTypes from '../constants';

const initialState = {
  userBooks: [],
  receivedTradeRequests: []
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_OWNER_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, { userBooks: books.slice() });
    }

    case ActionTypes.GET_RECEIVED_TRADE_REQUESTS_SUCCESS: {
      const { receivedTradeRequests } = action.payload;
      return Object.assign({}, state, {
        receivedTradeRequests: receivedTradeRequests.slice()
      });
    }

    default:
      return state;
  }
};

export default dashboard;
