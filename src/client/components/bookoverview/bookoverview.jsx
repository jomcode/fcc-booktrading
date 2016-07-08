import React, { Component } from 'react';

class BookOverview extends Component {
  render() {
    const { books } = this.props;

    return (
      <div>
        {
          books.length > 0 ?
            <h2>Your Books</h2> :
            <p>Your books will show up here when you add some.</p>
        }
        {
          books.map(b =>
            <div key={b.bookId}>
              <p>{b.title}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default BookOverview;
