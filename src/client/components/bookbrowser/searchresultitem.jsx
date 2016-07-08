import React, { Component } from 'react';

class SearchResultItem extends Component {
  render() {
    const { title, onSave } = this.props;

    return (
      <div>
        <p>
          {title}
          <button onClick={onSave}>add</button>
        </p>
      </div>
    );
  }
}

export default SearchResultItem;
