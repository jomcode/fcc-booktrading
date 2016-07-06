import React, { Component } from 'react';

import SearchForm from './searchform';
import SearchResults from './searchresults';

class BookBrowser extends Component {
  constructor(props) {
    super(props);

    this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
    this._handleBookSave = this._handleBookSave.bind(this);
    this._handleBookTradeRequest = this._handleBookTradeRequest.bind(this);
  }

  _handleSearchSubmit(data) {
    const {
      actions: { getBooksFromGoogle, getOtherUserBooks },
      dispatch,
      userId
    } = this.props;
    if (!data.query || data.query.trim().length < 1) return;
    const filter = data.filter.slice();
    const query = data.query.slice();

    if (filter === 'google') dispatch(getBooksFromGoogle({ query }));
    if (filter === 'users') dispatch(getOtherUserBooks(userId));
  }

  _handleBookSave(userId, book) {
    const {
      actions: { saveBookToUser },
      bookBrowser: { searchFilter },
      dispatch
    } = this.props;

    if (searchFilter !== 'google') return;

    const data = Object.assign({}, book, { ownerId: userId });

    dispatch(saveBookToUser(data));
  }

  _handleBookTradeRequest(userId, ownerId, bookId, bookTitle) {
    const {
      bookBrowser: { searchFilter },
      actions: { sendTradeRequest },
      dispatch
    } = this.props;

    if (searchFilter !== 'users') return;

    const data = Object.assign({}, {
      sentBy: userId,
      receivedBy: ownerId,
      bookId,
      bookTitle
    });

    dispatch(sendTradeRequest(data));
  }

  render() {
    const { bookBrowser: { books, searchFilter }, userId } = this.props;

    return (
      <div>
        <SearchForm
          onSubmit={this._handleSearchSubmit}
          initialValues={{ filter: searchFilter }}
        />

        <SearchResults
          books={books}
          userId={userId}
          onSave={this._handleBookSave}
          onTradeRequest={this._handleBookTradeRequest}
          searchFilter={searchFilter}
        />
      </div>
    );
  }
}

export default BookBrowser;
