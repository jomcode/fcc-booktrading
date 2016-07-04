import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

const editProfile = () => ({
  type: ActionTypes.EDIT_PROFILE
});

const editProfileSuccess = () => ({
  type: ActionTypes.EDIT_PROFILE_SUCCESS
});

const editProfileFailure = () => ({
  type: ActionTypes.EDIT_PROFILE_FAILURE
});

const resetEditProfile = () => ({
  type: ActionTypes.RESET_EDIT_PROFILE
});

const editUserProfile = () => dispatch => {
  dispatch(editProfile());
};

export { editUserProfile, resetEditProfile };
