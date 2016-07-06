import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

const getOwnerBooks = () => ({
  type: ActionTypes.GET_OWNER_BOOKS
});

const getOwnerBooksSuccess = (books) => ({
  type: ActionTypes.GET_OWNER_BOOKS_SUCCESS,
  payload: {
    books
  }
});

const getOwnerBooksFailure = (error) => ({
  type: ActionTypes.GET_OWNER_BOOKS_FAILURE,
  error
});

const resetGetOwnerBooks = () => ({
  type: ActionTypes.RESET_GET_OWNER_BOOKS
});

const getAllOwnerBooks = (query) => dispatch => {
  dispatch(getOwnerBooks());
  feathers.getAllOwnerBooks(query)
    .then(r => {
      const books = r.map(b => Object.assign({}, {
        bookId: b._id,
        googleId: b.googleId,
        title: b.title
      }));
      dispatch(getOwnerBooksSuccess(books));
    })
    .catch(e => dispatch(getOwnerBooksFailure(e)));
};

export { getAllOwnerBooks, resetGetOwnerBooks };

const getReceivedTradeRequests = () => ({
  type: ActionTypes.GET_RECEIVED_TRADE_REQUESTS
});

const getReceivedTradeRequestsSuccess = (receivedTradeRequests) => ({
  type: ActionTypes.GET_RECEIVED_TRADE_REQUESTS_SUCCESS,
  payload: {
    receivedTradeRequests
  }
});

const getReceivedTradeRequestsFailure = () => ({
  type: ActionTypes.GET_RECEIVED_TRADE_REQUESTS_FAILURE
});

const resetGetReceivedTradeRequests = () => ({
  type: ActionTypes.RESET_GET_RECEIVED_TRADE_REQUESTS
});

const getAllReceivedTradeRequests = userId => dispatch => {
  dispatch(getReceivedTradeRequests());

  feathers.getReceivedTradeRequests()
    .then(r => {
      const requests = r.map(req => Object.assign({}, {
        tradeId: req._id,
        sentBy: req.sentBy,
        receivedBy: req.receivedBy,
        proposedBook: Object.assign({}, req.proposedBook),
        requestedBook: Object.assign({}, req.requestedBook)
      }));
      dispatch(getReceivedTradeRequestsSuccess(requests));
    })
    .catch(e => dispatch(getReceivedTradeRequestsFailure(e)));
};

export { getAllReceivedTradeRequests, resetGetReceivedTradeRequests };
