import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false
};

const bookSearch = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GOOGLE_BOOKS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.GET_GOOGLE_BOOKS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_GET_GOOGLE_BOOKS: {
      return Object.assign({}, initialState);
    }

    case ActionTypes.GET_USER_BOOKS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.GET_USER_BOOKS_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.GET_USER_BOOKS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_GET_USER_BOOKS: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default bookSearch;
