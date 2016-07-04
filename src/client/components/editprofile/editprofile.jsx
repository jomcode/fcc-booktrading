import React, { Component } from 'react';
import { withRouter } from 'react-router';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this._handleEditProfileSubmit = this._handleEditProfileSubmit.bind(this);
  }

  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  _handleEditProfileSubmit(data) {}

  render() {
    return (
      <div>
        editprofile.jsx
      </div>
    );
  }
}

EditProfile = withRouter(EditProfile);

export default EditProfile;
