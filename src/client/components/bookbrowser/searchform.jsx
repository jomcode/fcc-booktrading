import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SearchForm extends Component {
  render() {
    const { fields: { query }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Search..." {...query} />
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

SearchForm = reduxForm({
  form: 'bookSearch',
  fields: ['query']
})(SearchForm);

export default SearchForm;
