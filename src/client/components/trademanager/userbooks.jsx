import React, { Component } from 'react';

class UserBooks extends Component {
  render() {
    const { otherUserBooks, onTradeRequest } = this.props;

    return (
      <div>
        userbooks.jsx
        {
          otherUserBooks.map(b =>
            <div>
              <p>{b.title}</p>
              <button onClick={onTradeRequest.bind(null, b)}>Request Trade</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default UserBooks;
