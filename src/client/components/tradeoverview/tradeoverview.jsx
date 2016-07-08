import React, { Component } from 'react';

import TradeOverViewItem from './tradeoverviewitem';

class TradeOverview extends Component {
  render() {
    const { receivedTradeRequests, onAccept, onReject } = this.props;

    return (
      <div>
        {
          receivedTradeRequests.length > 0 ?
            <h2>Received trade requests</h2> :
            null
        }

        {
          receivedTradeRequests.map(t =>
            <TradeOverViewItem
              key={t.tradeId}
              tradeData={t}
              onAccept={onAccept.bind(null, t)}
              onReject={onReject.bind(null, t)}
            />
          )
        }
      </div>
    );
  }
}

export default TradeOverview;
