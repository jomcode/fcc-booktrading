import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class LogInForm extends Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Email" {...email} />
        </div>
        <div>
          <input type="password" {...password} />
        </div>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

LogInForm = reduxForm({
  form: 'logIn',
  fields: ['email', 'password']
})(LogInForm);

export default LogInForm;
