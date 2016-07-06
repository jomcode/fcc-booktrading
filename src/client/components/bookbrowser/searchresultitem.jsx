import React, { Component } from 'react';

class SearchResultItem extends Component {
  constructor(props) {
    super(props);

    this._renderGoogle = this._renderGoogle.bind(this);
    this._renderUsers = this._renderUsers.bind(this);
  }

  _renderGoogle() {
    const { onSave, title } = this.props;

    return (
      <div>
        <p>{title}</p>
        <button onClick={onSave}>add</button>
      </div>
    );
  }

  _renderUsers() {
    const { onTradeRequest, title } = this.props;

    return (
      <div>
        <p>{title}</p>
        <button onClick={onTradeRequest}>request trade</button>
      </div>
    );
  }

  render() {
    const { searchFilter } = this.props;

    return searchFilter === 'google' ?
      this._renderGoogle() :
      this._renderUsers();
  }
}

export default SearchResultItem;
