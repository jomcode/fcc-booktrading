import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
  componentDidMount() {
    const { actions: { checkUserToken }, dispatch } = this.props;
    dispatch(checkUserToken());

    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLogout() {
    const { actions: { logoutUser }, isAuthenticated, dispatch } = this.props;
    if (isAuthenticated) dispatch(logoutUser());
  }

  render() {
    const { isAuthenticated, children } = this.props;

    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          logoutHandler={this._handleLogout}
        />

        {children}

        <Footer />
      </div>
    );
  }
}

export default App;
