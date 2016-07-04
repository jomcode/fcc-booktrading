import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

const editProfile = () => ({
  type: ActionTypes.EDIT_PROFILE
});

const editProfileSuccess = (user) => ({
  type: ActionTypes.EDIT_PROFILE_SUCCESS,
  payload: {
    user
  }
});

const editProfileFailure = (error) => ({
  type: ActionTypes.EDIT_PROFILE_FAILURE,
  error
});

const resetEditProfile = () => ({
  type: ActionTypes.RESET_EDIT_PROFILE
});

const editUserProfile = (id, data) => dispatch => {
  dispatch(editProfile());

  feathers.editUserProfile(id, data)
    .then(r => {
      const updatedUser = Object.assign({}, r);
      dispatch(editProfileSuccess(updatedUser));
    })
    .catch(e => dispatch(editProfileFailure(e)));
};

export { editUserProfile, resetEditProfile };
