import React, { Component } from 'react';

import Welcome from '../welcome/welcome';
import BookBrowserContainer from '../../redux/containers/bookbrowsercontainer';

class Index extends Component {
  constructor(props) {
    super(props);

    this._renderWelcome = this._renderWelcome.bind(this);
    this._renderBookBrowser = this._renderBookBrowser.bind(this);
  }

  _renderWelcome() {
    return (<Welcome />);
  }

  _renderBookBrowser() {
    return (<BookBrowserContainer />);
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        {
          isAuthenticated ?
            this._renderBookBrowser() :
            this._renderWelcome()
        }
      </div>
    );
  }
}

export default Index;
