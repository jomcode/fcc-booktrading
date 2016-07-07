import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

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

/* Set requested book for create trade */
const setRequestedBook = (requestedBook) => ({
  type: ActionTypes.SET_REQUESTED_BOOK,
  payload: {
    requestedBook
  }
});

export { setRequestedBook };
