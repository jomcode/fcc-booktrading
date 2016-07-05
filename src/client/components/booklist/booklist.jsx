import React, { Component } from 'react';

import BookListItem from './booklistitem';

class BookList extends Component {
  render() {
    const { books, userId, onSave } = this.props;

    return (
      <div>
        {
          books.length > 0 ?
            books.map(b =>
              <BookListItem
                key={b.id}
                title={b.volumeInfo.title}
                onSave={onSave.bind(null, userId, b)}
              />
            ) :
            null
        }
      </div>
    );
  }
}

export default BookList;
