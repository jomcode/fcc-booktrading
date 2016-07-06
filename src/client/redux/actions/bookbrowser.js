import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Get Google Books */
const getGoogleBooks = () => ({
  type: ActionTypes.GET_GOOGLE_BOOKS
});

const getGoogleBooksSuccess = (books) => ({
  type: ActionTypes.GET_GOOGLE_BOOKS_SUCCESS,
  payload: {
    books
  }
});

const getGoogleBooksFailure = (error) => ({
  type: ActionTypes.GET_GOOGLE_BOOKS_FAILURE,
  error
});

const resetGetGoogleBooks = () => ({
  type: ActionTypes.RESET_GET_GOOGLE_BOOKS
});

const getBooksFromGoogle = (query) => dispatch => {
  dispatch(getGoogleBooks());

  feathers.getGoogleBooks(query)
    .then(r => {
      const books = r.items.map(b => Object.assign({}, {
        googleId: b.id,
        title: b.volumeInfo.title
      }));
      dispatch(getGoogleBooksSuccess(books));
    })
    .catch(e => dispatch(getGoogleBooksFailure(e)));
};

export { getBooksFromGoogle, resetGetGoogleBooks };

/* Save Book to User */
const saveUserBook = () => ({
  type: ActionTypes.SAVE_USER_BOOK
});

const saveUserBookSuccess = (data) => ({
  type: ActionTypes.SAVE_USER_BOOK_SUCCESS,
  payload: {
    data
  }
});

const saveUserBookFailure = (error) => ({
  type: ActionTypes.SAVE_USER_BOOK_FAILURE,
  error
});

const resetSaveUserBook = () => ({
  type: ActionTypes.RESET_SAVE_USER_BOOK
});

const saveBookToUser = (data) => dispatch => {
  dispatch(saveUserBook());

  feathers.saveUserBook(data)
    .then(r => dispatch(saveUserBookSuccess(r)))
    .catch(e => dispatch(saveUserBookFailure(e)));
};

export { saveBookToUser, resetSaveUserBook };

/* Get all other user books */
const getUserBooks = () => ({
  type: ActionTypes.GET_USER_BOOKS
});

const getUserBooksSuccess = (books) => ({
  type: ActionTypes.GET_USER_BOOKS_SUCCESS,
  payload: {
    books
  }
});

const getUserBooksFailure = (error) => ({
  type: ActionTypes.GET_USER_BOOKS_FAILURE
});

const resetGetUserBooks = () => ({
  type: ActionTypes.RESET_GET_USER_BOOKS
});

const getOtherUserBooks = (query) => dispatch => {
  dispatch(getUserBooks());

  feathers.getOtherUserBooks(query)
    .then(r => {
      if (!Array.isArray(r)) return;
      const books = r.map(b => Object.assign({}, {
        bookId: b._id,
        googleId: b.googleId,
        ownerId: b.ownerId,
        title: b.title
      }));
      dispatch(getUserBooksSuccess(books));
    })
    .catch(e => dispatch(getUserBooksFailure(e)));
};

export { getOtherUserBooks, resetGetUserBooks };

/* Send trade request for book */
const tradeRequest = () => ({
  type: ActionTypes.TRADE_REQUEST
});

const tradeRequestSuccess = (trade) => ({
  type: ActionTypes.TRADE_REQUEST_SUCCESS,
  payload: {
    trade
  }
});

const tradeRequestFailure = (error) => ({
  type: ActionTypes.TRADE_REQUEST_FAILURE,
  error
});

const resetTradeRequest = () => ({
  type: ActionTypes.RESET_TRADE_REQUEST
});

const sendTradeRequest = data => dispatch => {
  dispatch(tradeRequest());

  feathers.createTradeRequest(data)
    .then(r => {
      dispatch(tradeRequestSuccess(r));
    })
    .catch(e => dispatch(tradeRequestFailure(e)));
};

export { sendTradeRequest, resetTradeRequest };
