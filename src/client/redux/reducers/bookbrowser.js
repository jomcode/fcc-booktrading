import * as ActionTypes from '../constants';

const initialState = {
  books: []
};

const bookBrowser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, {
        books
      });
    }

    default:
      return state;
  }
};

export default bookBrowser;
