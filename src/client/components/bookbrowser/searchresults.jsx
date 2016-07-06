import React, { Component } from 'react';

import SearchResultItem from './searchresultitem';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this._renderGoogle = this._renderGoogle.bind(this);
    this._renderUsers = this._renderUsers.bind(this);
  }

  _renderGoogle() {
    const { searchFilter, userId, books, onSave } = this.props;

    return books.map(b =>
      <SearchResultItem
        searchFilter={searchFilter}
        key={b.id}
        title={b.title}
        onSave={onSave.bind(null, userId, b)}
      />
    );
  }

  _renderUsers() {
    const { searchFilter, userId, books, onTradeRequest } = this.props;

    return books.map(b =>
      <SearchResultItem
        searchFilter={searchFilter}
        key={b.bookId}
        title={b.title}
        onTradeRequest={onTradeRequest.bind(null, userId, b.ownerId, b.bookId, b.title)}
      />
    );
  }

  render() {
    const { searchFilter } = this.props;

    return (
      <div>
        {
          searchFilter === 'google' ?
            this._renderGoogle() :
            this._renderUsers()
        }
      </div>
    );
  }
}

export default SearchResults;
