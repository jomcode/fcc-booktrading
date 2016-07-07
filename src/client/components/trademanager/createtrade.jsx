import React, { Component } from 'react';

class CreateTrade extends Component {
  componentDidMount() {
    const { getAllOwnerBooks, userId, dispatch } = this.props;
    dispatch(getAllOwnerBooks({ ownerId: userId }));
  }

  render() {
    return (
      <div>
        createtrade.jsx
      </div>
    );
  }
}

export default CreateTrade;
