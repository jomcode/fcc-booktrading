import React, { Component } from 'react';

class BookListItem extends Component {
  constructor(props) {
    super(props);

    this._renderBrowser = this._renderBrowser.bind(this);
    this._renderDashboard = this._renderDashboard.bind(this);
  }

  _renderBrowser() {
    const { title, onSave } = this.props;

    return (
      <div>
        <p>{title}</p>
        <button onClick={onSave}>add</button>
      </div>
    );
  }

  _renderDashboard() {
    const { title } = this.props;

    return (
      <div>
        <p>{title}</p>
      </div>
    );
  }

  render() {
    const { mode } = this.props;

    return mode === 'browser' ? this._renderBrowser() : this._renderDashboard();
  }
}

export default BookListItem;
