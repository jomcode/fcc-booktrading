import React, { Component } from 'react';
import { withRouter, Link, IndexLink } from 'react-router';

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

  _handleTradeAccept(trade) {
    console.log('_handleTradeAccept', trade);
  }

  _handleTradeReject(trade) {
    console.log('_handleTradeReject', trade);
  }

  render() {
    const { dashboard: { userBooks, receivedTradeRequests } } = this.props;

    return (
      <div>
        <IndexLink to="/">Browse Books</IndexLink>
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
