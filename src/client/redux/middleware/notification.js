import * as ActionTypes from '../constants';
import * as actions from '../actions/notification';

const displayNotification = store => (notification) => {
  const msg = Object.assign({}, notification, { position: 'tc' });
  store.dispatch(actions.setNotification(msg));
  store.dispatch(actions.resetNotification());
};

const notificationMiddleware = store => next => action => {
  const notify = displayNotification(store);

  switch (action.type) {
    case ActionTypes.REGISTER_USER_SUCCESS: {
      notify({
        message: 'Registration successful. Log in with your new account.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.LOGIN_SUCCESS: {
      notify({
        message: 'Logged in.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      notify({
        message: 'Logged out.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.CHECK_TOKEN_SUCCESS: {
      notify({
        message: 'Welcome back! You are still logged in.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.EDIT_PROFILE_SUCCESS: {
      notify({
        message: 'Profile successfully edited.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.GET_GOOGLE_BOOKS_SUCCESS: {
      notify({
        message: 'Retrieved search results.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.SAVE_USER_BOOK_SUCCESS: {
      notify({
        message: 'Book saved.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.TRADE_REQUEST_SUCCESS: {
      notify({
        message: 'Trade request sent.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.ACCEPT_TRADE_SUCCESS: {
      notify({
        message: 'Trade accepted.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    case ActionTypes.REJECT_TRADE_SUCCESS: {
      notify({
        message: 'Trade rejected.',
        level: 'success',
        autoDismiss: 2
      });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default notificationMiddleware;
