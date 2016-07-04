import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Logout */
const logout = () => ({
  type: ActionTypes.LOGOUT
});

const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS
});

const logoutFailure = (error) => ({
  type: ActionTypes.LOGOUT_FAILURE,
  error
});

const resetLogout = () => ({
  type: ActionTypes.RESET_LOGOUT
});

const logoutUser = () => dispatch => {
  dispatch(logout());

  feathers.logout()
    .then(r => dispatch(logoutSuccess()))
    .catch(e => dispatch(logoutFailure()));
};

export { logoutUser, resetLogout };

/* Check Token */
const checkToken = () => ({
  type: ActionTypes.CHECK_TOKEN
});

const checkTokenSuccess = (token, data) => ({
  type: ActionTypes.CHECK_TOKEN_SUCCESS,
  payload: {
    token,
    data
  }
});

const checkTokenFailure = (error) => ({
  type: ActionTypes.CHECK_TOKEN_FAILURE,
  error
});

const resetCheckToken = () => ({
  type: ActionTypes.RESET_CHECK_TOKEN
});

const checkUserToken = () => dispatch => {
  dispatch(checkToken());

  feathers.checkToken()
    .then(r => {
      const token = r.token.slice();
      const data = Object.assign({}, r.data);
      dispatch(checkTokenSuccess(token, data));
    })
    .catch(e => {
      dispatch(checkTokenFailure(e));
    });
};

export { checkUserToken, resetCheckToken };
