import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false
};

const editProfile = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_PROFILE: {}

    case ActionTypes.EDIT_PROFILE_SUCCESS: {}

    case ActionTypes.EDIT_PROFILE_FAILURE: {}

    case ActionTypes.RESET_EDIT_PROFILE: {}

    default:
      return state;
  }
};

export default editProfile;
