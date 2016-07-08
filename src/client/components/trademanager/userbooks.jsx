import React, { Component } from 'react';

class UserBooks extends Component {
  render() {
    const { otherUserBooks, onTradeRequest } = this.props;

    return (
      <div>
        <h2>Other User's Books</h2>
        {
          otherUserBooks.map(b =>
            <div key={b.bookId}>
              <p>
                {b.title}
                <button onClick={onTradeRequest.bind(null, b)}>Request Trade</button>
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default UserBooks;
