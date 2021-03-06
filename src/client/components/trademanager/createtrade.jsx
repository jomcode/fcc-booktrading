import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CreateTrade extends Component {
  constructor(props) {
    super(props);

    this._handleTrade = this._handleTrade.bind(this);
  }

  componentDidMount() {
    const { getAllOwnerBooks, userId, dispatch } = this.props;
    dispatch(getAllOwnerBooks({ ownerId: userId }));
  }

  componentDidUpdate() {
    const {
      createTrade: { isSuccessful },
      actions: { resetTradeRequest },
      dispatch,
      router
    } = this.props;

    if (isSuccessful) {
      router.push('/trade');
      dispatch(resetTradeRequest());
    }
  }

  _handleTrade(data) {
    const {
    actions: { sendTradeRequest },
    createTrade: { requestedBook },
    userId,
    dispatch
  } = this.props;

    const proposedBook = Object.assign({}, data, { ownerId: userId });

    const trade = Object.assign({}, {
      proposedBook,
      requestedBook,
      sentBy: userId,
      receivedBy: requestedBook.ownerId
    });

    dispatch(sendTradeRequest(trade));
  }

  render() {
    const { createTrade: { requestedBook }, userBooks } = this.props;

    return (
      <div>
        <h2>Create Trade</h2>
        <p>Choose one of your books to offer:</p>
        {
          userBooks.map(b =>
            <div key={b.bookId}>
              <p>{b.title}</p>
              <button onClick={this._handleTrade.bind(null, b)}>Send Trade Offer</button>
            </div>
          )
        }
      </div>
    );
  }
}

CreateTrade = withRouter(CreateTrade);

export default CreateTrade;
