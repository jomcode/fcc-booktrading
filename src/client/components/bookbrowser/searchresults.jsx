import React, { Component } from 'react';

import SearchResultItem from './searchresultitem';

class SearchResults extends Component {
  render() {
    const { books, userId, onSave } = this.props;

    return (
      <div>
        {
          books.length > 0 ?
            <h2>Search Results</h2> :
            <p>Enter a search query above to find books...</p>
        }

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
