import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class EditProfileForm extends Component {
  render() {
    const { fields: { name, city, state }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Name" {...name} />
        </div>
        <div>
          <input type="text" placeholder="City" {...city} />
        </div>
        <div>
          <input type="text" placeholder="State" {...state} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    );
  }
}

EditProfileForm = reduxForm({
  form: 'editProfile',
  fields: ['name', 'city', 'state']
})(EditProfileForm);

export default EditProfileForm;
