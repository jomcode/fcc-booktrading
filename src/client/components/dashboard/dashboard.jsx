import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';

import BookOverview from '../bookoverview/bookoverview';
import TradeOverview from '../tradeoverview/tradeoverview';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this._handleTradeAccept = this._handleTradeAccept.bind(this);
    this._handleTradeReject = this._handleTradeReject.bind(this);
  }

  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidMount() {
    const {
      actions: { getAllOwnerBooks, getAllReceivedTradeRequests },
      dispatch,
      isAuthenticated,
      userId
    } = this.props;

    if (isAuthenticated) {
      dispatch(getAllOwnerBooks({ ownerId: userId }));
      dispatch(getAllReceivedTradeRequests({
        receivedBy: userId,
        status: 'pending'
      }));
    }
  }

  componentDidUpdate() {
    const {
      actions: {
        getAllOwnerBooks,
        getAllReceivedTradeRequests,
        resetAcceptTrade,
        resetRejectTrade
      },
      userId,
      dispatch,
      acceptTrade,
      rejectTrade
    } = this.props;

    if (acceptTrade.isSuccessful || rejectTrade.isSuccessful) {
      dispatch(getAllOwnerBooks({ ownerId: userId }));
      dispatch(getAllReceivedTradeRequests({
        receivedBy: userId,
        status: 'pending'
      }));

      dispatch(resetAcceptTrade());
      dispatch(resetRejectTrade());
    }
  }

  _handleTradeAccept(trade) {
    const { actions: { acceptTradeRequest }, dispatch } = this.props;

    const tradeId = trade.tradeId.slice();

    dispatch(acceptTradeRequest(tradeId));
  }

  _handleTradeReject(trade) {
    const { actions: { rejectTradeRequest }, dispatch } = this.props;

    const tradeId = trade.tradeId.slice();

    dispatch(rejectTradeRequest(tradeId));
  }

  render() {
    const { dashboard: { userBooks, receivedTradeRequests } } = this.props;

    return (
      <div>
        <Link to="/profile/edit">Edit Profile</Link>

        <BookOverview books={userBooks} />

        <TradeOverview
          receivedTradeRequests={receivedTradeRequests}
          onAccept={this._handleTradeAccept}
          onReject={this._handleTradeReject}
        />
      </div>
    );
  }
}

Dashboard = withRouter(Dashboard);

export default Dashboard;
