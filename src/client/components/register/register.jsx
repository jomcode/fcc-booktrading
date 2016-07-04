import React, { Component } from 'react';
import { withRouter } from 'react-router';

import RegistrationForm from './registrationform';

class Register extends Component {
  constructor(props) {
    super(props);

    this._handleRegisterSubmit = this._handleRegisterSubmit.bind(this);
  }

  componentDidUpdate() {
    const {
      actions: { resetRegisterUser },
      router,
      register,
      dispatch
    } = this.props;

    if (register.isSuccessful) {
      router.push('/login');
      dispatch(resetRegisterUser());
    }
  }

  _handleRegisterSubmit(data) {
    const { actions: { registerNewUser }, dispatch } = this.props;
    dispatch(registerNewUser(data));
  }

  render() {
    return (
      <div>
        <h1>Register Account</h1>
        <RegistrationForm onSubmit={this._handleRegisterSubmit} />
      </div>
    );
  }
}

Register = withRouter(Register);

export default Register;
