import React, { Component } from 'react';

class TradeManager extends Component {
  _handleBookTradeRequest(userId, ownerId, bookId, bookTitle) {
    const {
      bookBrowser: { searchFilter },
      actions: { sendTradeRequest },
      dispatch
    } = this.props;

    if (searchFilter !== 'users') return;

    const data = Object.assign({}, {
      sentBy: userId,
      receivedBy: ownerId,
      bookId,
      bookTitle
    });

    dispatch(sendTradeRequest(data));
  }

  render() {
    return (
      <div>
        trademanager.jsx
      </div>
    );
  }
}

export default TradeManager;
