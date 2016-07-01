import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Login */
const login = (email, password) => ({
  type: ActionTypes.LOGIN
});

const loginSuccess = (token, data) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    data
  }
});

const loginFailure = (error) => ({
  type: ActionTypes.LOGIN_FAILURE,
  error
});

const resetLogin = () => ({
  type: ActionTypes.RESET_LOGIN
});

const loginUser = (email, password) => dispatch => {
  dispatch(login());

  feathers.login(email, password)
    .then(r => console.log(r))
    .catch(e => console.error(e));
};

export { loginUser };

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
    .then(r => console.log(r))
    .catch(e => console.error(e));
};

export { logoutUser };

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

export { checkUserToken };
