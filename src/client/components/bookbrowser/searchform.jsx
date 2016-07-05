import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SearchForm extends Component {
  render() {
    const { fields: { query, filter }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Search..." {...query} />
        </div>
        <div>
          <label>Filter</label>
          <div>
            <label>
              <input
                type="radio"
                value="users"
                onChange={filter.onChange}
                checked={filter.value === 'users'}
              />Users
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="google"
                onChange={filter.onChange}
                checked={filter.value === 'google'}
              />Google
            </label>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchForm = reduxForm({
  form: 'bookSearch',
  fields: ['query', 'filter']
})(SearchForm);

export default SearchForm;
