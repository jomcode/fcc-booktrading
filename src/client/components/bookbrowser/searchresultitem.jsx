import React, { Component } from 'react';

class SearchResultItem extends Component {
  render() {
    const { title, onSave } = this.props;

    return (
      <div>
        <p>{title}</p>
        <button onClick={onSave}>add</button>
      </div>
    );
  }
}

export default SearchResultItem;
