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

const getAllReceivedTradeRequests = query => dispatch => {
  dispatch(getReceivedTradeRequests());

  feathers.getReceivedTradeRequests(query)
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

const acceptTrade = () => ({
  type: ActionTypes.ACCEPT_TRADE
});

const acceptTradeSuccess = (trade) => ({
  type: ActionTypes.ACCEPT_TRADE_SUCCESS,
  payload: {
    trade
  }
});

const acceptTradeFailure = (error) => ({
  type: ActionTypes.ACCEPT_TRADE_FAILURE,
  error
});

const resetAcceptTrade = () => ({
  type: ActionTypes.RESET_ACCEPT_TRADE
});

const acceptTradeRequest = (tradeId) => dispatch => {
  dispatch(acceptTrade());

  feathers.acceptTrade(tradeId)
    .then(r => {
      dispatch(acceptTradeSuccess(r));
    })
    .catch(e => dispatch(acceptTradeFailure(e)));
};

export { acceptTradeRequest, resetAcceptTrade };

const rejectTrade = () => ({
  type: ActionTypes.REJECT_TRADE
});

const rejectTradeSuccess = (trade) => ({
  type: ActionTypes.REJECT_TRADE_SUCCESS,
  payload: {
    trade
  }
});

const rejectTradeFailure = (error) => ({
  type: ActionTypes.REJECT_TRADE_FAILURE,
  error
});

const resetRejectTrade = () => ({
  type: ActionTypes.RESET_REJECT_TRADE
});

const rejectTradeRequest = (tradeId) => dispatch => {
  dispatch(rejectTrade());

  feathers.rejectTrade(tradeId)
    .then(r => {
      dispatch(rejectTradeSuccess(r));
    })
    .catch(e => dispatch(rejectTradeFailure(e)));
};

export { rejectTradeRequest, resetRejectTrade };
