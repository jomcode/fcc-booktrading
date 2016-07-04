import { connect } from 'react-redux';

import EditProfile from '../../components/editprofile/editprofile';
import * as actions from '../actions/editprofile';

const mapStateToProps = state => ({
  editProfile: state.editProfile,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default EditProfileContainer;
