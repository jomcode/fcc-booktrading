import React, { Component } from 'react';

import SearchForm from './searchform';
import BookList from '../booklist/booklist';

class BookBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
  }

  _handleSearchSubmit(data) {
    console.log('_handleSearchSubmit', data);
  }

  render() {
    return (
      <div>
        <SearchForm
          onSubmit={this._handleSearchSubmit}
          initialValues={{ filter: 'google' }}
        />

        <BookList />
      </div>
    );
  }
}

export default BookBrowser;
