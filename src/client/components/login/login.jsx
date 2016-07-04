import React, { Component } from 'react';
import { withRouter } from 'react-router';

import LogInForm from './loginform';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this._handleLogInSubmit = this._handleLogInSubmit.bind(this);
  }

  componentDidUpdate() {
    const { actions: { resetLogin }, router, dispatch, logIn } = this.props;
    if (logIn.isSuccessful) {
      router.push('/');
      dispatch(resetLogin());
    }
  }

  _handleLogInSubmit(data) {
    const { actions: { loginUser }, dispatch } = this.props;
    const email = data.email.slice();
    const password = data.password.slice();
    dispatch(loginUser(email, password));
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <LogInForm onSubmit={this._handleLogInSubmit} />
      </div>
    );
  }
}

LogIn = withRouter(LogIn);

export default LogIn;
