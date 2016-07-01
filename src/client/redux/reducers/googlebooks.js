import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false
};

const googleBooks = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GOOGLE_BOOKS: {}
    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {}
    case ActionTypes.GET_GOOGLE_BOOKS_FAILURE: {}
    case ActionTypes.RESET_GET_GOOGLE_BOOKS: {}

    default:
      return state;
  }
};

export default googleBooks;
