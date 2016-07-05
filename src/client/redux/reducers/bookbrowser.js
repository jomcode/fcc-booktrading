import * as ActionTypes from '../constants';

const initialState = {
  books: [],
  isFetching: false
};

const bookBrowser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GOOGLE_BOOKS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, {
        books,
        isFetching: false
      });
    }

    case ActionTypes.GET_GOOGLE_BOOKS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_GET_GOOGLE_BOOKS: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default bookBrowser;
