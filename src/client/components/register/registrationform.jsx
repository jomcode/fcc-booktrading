import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class RegistrationForm extends Component {
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
        <button type="submit">Register</button>
      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'register',
  fields: ['email', 'password']
})(RegistrationForm);

export default RegistrationForm;
