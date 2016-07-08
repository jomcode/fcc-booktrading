import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  isSuccessful: false
};

const saveBook = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_BOOK: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.SAVE_USER_BOOK_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.SAVE_USER_BOOK_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_SAVE_USER_BOOK: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default saveBook;
