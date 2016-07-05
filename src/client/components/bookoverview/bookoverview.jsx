import React, { Component } from 'react';

import BookList from '../booklist/booklist';

class BookOverview extends Component {
  render() {
    const { books } = this.props;

    return (
      <div>
        bookoverview.jsx
        <BookList
          mode="dashboard"
          books={books}
        />
      </div>
    );
  }
}

export default BookOverview;
