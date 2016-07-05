import React, { Component } from 'react';

import BookListItem from './booklistitem';

class BookList extends Component {
  constructor(props) {
    super(props);

    this._renderBrowser = this._renderBrowser.bind(this);
    this._renderDashboard = this._renderDashboard.bind(this);
  }

  _renderBrowser() {
    const { books, userId, onSave } = this.props;

    return books.map(b =>
      <BookListItem
        mode="browser"
        key={b.id}
        title={b.volumeInfo.title}
        onSave={onSave.bind(null, userId, b)}
      />
    );
  }

  _renderDashboard() {
    const { books, userId, onDelete } = this.props;

    return books.map(b =>
      <BookListItem
        mode="dashboard"
        key={b.bookId}
        title={b.title}
      />
    );
  }

  render() {
    const { mode } = this.props;
    return (
      <div>
        {
          mode === 'browser' ?
            this._renderBrowser() :
            this._renderDashboard()
        }
      </div>
    );
  }
}

export default BookList;
