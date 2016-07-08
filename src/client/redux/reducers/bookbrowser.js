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

    case ActionTypes.SAVE_USER_BOOK_SUCCESS: {
      const { book } = action.payload;
      const updatedBooks = state.books.filter(b => b.googleId !== book.googleId);
      return Object.assign({}, state, { books: updatedBooks });
    }

    default:
      return state;
  }
};

export default bookBrowser;
