import * as ActionTypes from '../constants';

const setNotification = (notification) => ({
  type: ActionTypes.SET_NOTIFICATION,
  payload: {
    notification
  }
});

const resetNotification = () => ({
  type: ActionTypes.RESET_NOTIFICATION
});

export { setNotification, resetNotification };
