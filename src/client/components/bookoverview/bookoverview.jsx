import React, { Component } from 'react';

class BookOverview extends Component {
  render() {
    const { books } = this.props;

    return (
      <div>
        <p>Your books:</p>
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
