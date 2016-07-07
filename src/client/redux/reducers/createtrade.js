import * as ActionTypes from '../constants';

const initialState = {
  requestedBook: {},
  proposedBook: {},
  isCreated: false
};

const createTrade = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_REQUESTED_BOOK: {
      const { payload: { requestedBook } } = action;
      return Object.assign({}, state, { requestedBook });
    }

    default:
      return state;
  }
};

export default createTrade;
