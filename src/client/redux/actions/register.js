import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Register User */
const registerUser = () => ({
  type: ActionTypes.REGISTER_USER
});

// for notifications
const registerUserSuccess = (user) => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
  payload: {
    user
  }
});

// for notifications
const registerUserFailure = (error) => ({
  type: ActionTypes.REGISTER_USER_FAILURE,
  error
});

const resetRegisterUser = () => ({
  type: ActionTypes.RESET_REGISTER_USER
});

const registerNewUser = (data) => dispatch => {
  dispatch(registerUser());

  feathers.createUser(data)
    .then(r => {
      dispatch(registerUserSuccess(r));
    })
    .catch(e => dispatch(registerUserFailure(e)));
};

export { registerNewUser, resetRegisterUser };
