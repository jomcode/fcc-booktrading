import * as ActionTypes from '../constants';

const initialState = {
  books: [],
  searchFilter: 'google'
};

const bookBrowser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, {
        books
      });
    }

    case ActionTypes.GET_USER_BOOKS_SUCCESS: {
      const { books } = action.payload;
      return Object.assign({}, state, {
        books
      });
    }

    case 'redux-form/CHANGE': {
      const { form, field, value } = action;
      if (form === 'bookSearch' && field === 'filter') {
        return Object.assign({}, state, { searchFilter: value, books: [] });
      }
      return state;
    }

    default:
      return state;
  }
};

export default bookBrowser;
