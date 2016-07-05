import React, { Component } from 'react';

import SearchForm from './searchform';
import BookList from '../booklist/booklist';

class BookBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
  }

  _handleSearchSubmit(data) {
    const { actions: { getBooksFromGoogle }, dispatch } = this.props;
    const filter = data.filter.slice();
    const query = data.query.slice();

    if (filter === 'google') dispatch(getBooksFromGoogle({ query, filter }));
  }

  render() {
    const { bookBrowser: { books, isFetching } } = this.props;

    return (
      <div>
        <SearchForm
          onSubmit={this._handleSearchSubmit}
          initialValues={{ filter: 'google' }}
        />

        <BookList books={books} isFetching={isFetching} />
      </div>
    );
  }
}

export default BookBrowser;
