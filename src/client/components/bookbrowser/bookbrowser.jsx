import React, { Component } from 'react';

import SearchForm from './searchform';
import BookList from '../booklist/booklist';

class BookBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
    this._handleBookSave = this._handleBookSave.bind(this);
  }

  _handleSearchSubmit(data) {
    const { actions: { getBooksFromGoogle }, dispatch } = this.props;
    if (!data.query || data.query.trim().length < 1) return;
    const filter = data.filter.slice();
    const query = data.query.slice();

    if (filter === 'google') dispatch(getBooksFromGoogle({ query, filter }));
  }

  _handleBookSave(userId, book) {
    const { actions: { saveBookToUser }, dispatch } = this.props;

    const data = Object.assign({}, {
      googleId: book.id,
      ownerId: userId,
      title: book.volumeInfo.title
    });

    dispatch(saveBookToUser(data));
  }

  render() {
    const { bookBrowser: { books }, userId } = this.props;

    return (
      <div>
        <SearchForm
          onSubmit={this._handleSearchSubmit}
          initialValues={{ filter: 'google' }}
        />

        <BookList
          books={books}
          userId={userId}
          onSave={this._handleBookSave}
          mode="browser"
        />
      </div>
    );
  }
}

export default BookBrowser;
