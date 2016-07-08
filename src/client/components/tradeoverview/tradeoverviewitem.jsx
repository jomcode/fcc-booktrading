import React, { Component } from 'react';

class TradeOverViewItem extends Component {
  render() {
    const {
      tradeData: { proposedBook, requestedBook },
      onAccept,
      onReject
    } = this.props;

    return (
      <div>
        <p>
          {proposedBook.title} FOR {requestedBook.title}
          <button onClick={onAccept}>Accept</button>
          <button onClick={onReject}>Reject</button>
        </p>
      </div>
    );
  }
}

export default TradeOverViewItem;
