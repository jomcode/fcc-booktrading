import * as ActionTypes from '../constants';

const initialState = {
  isSuccessful: false,
  isFetching: false
};

const editProfile = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_PROFILE: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.EDIT_PROFILE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        isSuccessful: true
      });
    }

    case ActionTypes.EDIT_PROFILE_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_EDIT_PROFILE: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export default editProfile;
