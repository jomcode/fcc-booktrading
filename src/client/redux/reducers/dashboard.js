import * as ActionTypes from '../constants';

const initialState = {
  userBooks: [],
  outgoingTrades: [],
  incomingTrades: []
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_OWNER_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, { userBooks: books.slice() });
    }

    default:
      return state;
  }
};

export default dashboard;
