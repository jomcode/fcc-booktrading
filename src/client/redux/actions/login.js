import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Login */
const login = (email, password) => ({
  type: ActionTypes.LOGIN
});

// for notifications
const loginSuccess = (token, user) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    user
  }
});

// for notifications
const loginFailure = (error) => ({
  type: ActionTypes.LOGIN_FAILURE,
  error
});

const resetLogin = () => ({
  type: ActionTypes.RESET_LOGIN
});

const loginUser = (email, password) => dispatch => {
  dispatch(login());

  feathers.logUserIn(email, password)
    .then(r => {
      const token = r.token.slice();
      const user = Object.assign({}, r.data);
      dispatch(loginSuccess(token, user));
    })
    .catch(e => {
      dispatch(loginFailure(e));
    });
};

export { loginUser, resetLogin };
