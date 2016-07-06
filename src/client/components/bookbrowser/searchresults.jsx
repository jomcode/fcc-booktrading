import React, { Component } from 'react';

import SearchResultItem from './searchresultitem';

class SearchResults extends Component {
  render() {
    const { books, userId, onSave } = this.props;

    return (
      <div>
        {
          books.map(b =>
            <SearchResultItem
              key={b.googleId}
              title={b.title}
              onSave={onSave.bind(null, userId, b)}
            />
          )
        }
      </div>
    );
  }
}

export default SearchResults;
