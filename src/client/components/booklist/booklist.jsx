import React, { Component } from 'react';

class BookList extends Component {
  render() {
    const { books, isFetching } = this.props;

    return (
      <div>
        {
          books.length > 0 ?
            books.map(b => <div key={b.id}>{b.volumeInfo.title}</div>) :
            null
        }
      </div>
    );
  }
}

export default BookList;
