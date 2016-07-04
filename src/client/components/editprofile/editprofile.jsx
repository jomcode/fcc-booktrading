import React, { Component } from 'react';
import { withRouter } from 'react-router';

import EditProfileForm from './editprofileform';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this._handleEditProfileSubmit = this._handleEditProfileSubmit.bind(this);
  }

  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidUpdate() {
    const {
      actions: { resetEditProfile },
      editProfile,
      dispatch,
      router
    } = this.props;
    if (editProfile.isSuccessful) {
      router.push('/dashboard');
      dispatch(resetEditProfile());
    }
  }

  _handleEditProfileSubmit(data) {
    const { actions: { editUserProfile }, userId, dispatch } = this.props;
    dispatch(editUserProfile(userId, data));
  }

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <EditProfileForm onSubmit={this._handleEditProfileSubmit} />
      </div>
    );
  }
}

EditProfile = withRouter(EditProfile);

export default EditProfile;
