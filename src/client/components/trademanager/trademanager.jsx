import React, { Component } from 'react';
import { withRouter } from 'react-router';

import UserBooks from './userbooks';

class TradeManager extends Component {
  constructor(props) {
    super(props);

    this._handleCreateTrade = this._handleCreateTrade.bind(this);
  }

  componentDidMount() {
    const { actions: { getOtherUserBooks }, dispatch, userId } = this.props;
    dispatch(getOtherUserBooks(userId));
  }

  _handleCreateTrade(book) {
    const { actions: { setRequestedBook }, dispatch, router } = this.props;
    dispatch(setRequestedBook(book));
    router.push('/trade/create');
  }

  render() {
    const { tradeManager: { otherUserBooks } } = this.props;

    return (
      <div>
        <h1>Trade Manager</h1>
        <UserBooks
          otherUserBooks={otherUserBooks}
          onTradeRequest={this._handleCreateTrade}
        />
      </div>
    );
  }
}

TradeManager = withRouter(TradeManager);

export default TradeManager;
