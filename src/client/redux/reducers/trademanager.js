import * as ActionTypes from '../constants';

const initialState = {
  otherUserBooks: []
};

const tradeManager = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_USER_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, { otherUserBooks: books.slice() });
    }

    default:
      return state;
  }
};

export default tradeManager;
