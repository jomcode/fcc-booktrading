import React, { Component } from 'react';

import SearchForm from './searchform';
import SearchResults from './searchresults';

class BookBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
    this._handleBookSave = this._handleBookSave.bind(this);
  }

  _handleSearchSubmit(data) {
    const {
      actions: { getBooksFromGoogle },
      dispatch
    } = this.props;
    if (!data.query || data.query.trim().length < 1) return;

    const query = data.query.slice();
    dispatch(getBooksFromGoogle({ query }));
  }

  _handleBookSave(userId, book) {
    const {
      actions: { saveBookToUser },
      dispatch
    } = this.props;

    const data = Object.assign({}, book, { ownerId: userId });
    dispatch(saveBookToUser(data));
  }

  render() {
    const { bookBrowser: { books }, userId } = this.props;

    return (
      <div>
        <h1>Book Finder</h1>
        <SearchForm
          onSubmit={this._handleSearchSubmit}
        />

        <SearchResults
          books={books}
          userId={userId}
          onSave={this._handleBookSave}
        />
      </div>
    );
  }
}

export default BookBrowser;
