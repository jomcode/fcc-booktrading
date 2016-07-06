import React, { Component } from 'react';

class TradeOverViewItem extends Component {
  render() {
    const { tradeData, onAccept, onReject } = this.props;

    return (
      <div>
        tradeoverviewitem.jsx
        <span>
          {tradeData.proposedBook.bookTitle}
        </span>
        <span>FOR</span>
        <span>
          {tradeData.requestedBook.bookTitle}
        </span>

        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
      </div>
    );
  }
}

export default TradeOverViewItem;
