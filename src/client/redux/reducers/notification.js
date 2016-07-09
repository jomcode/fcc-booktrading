import * as ActionTypes from '../constants';

const initialState = {
  notification: null
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_NOTIFICATION: {
      const updatedNotification = Object.assign({}, action.payload.notification);
      return Object.assign({}, state, {
        notification: updatedNotification
      });
    }

    case ActionTypes.RESET_NOTIFICATION: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default notification;
