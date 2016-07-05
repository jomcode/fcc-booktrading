import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleLogout = this._handleLogout.bind(this);
  }

  componentDidMount() {
    const { actions: { checkUserToken }, dispatch } = this.props;
    dispatch(checkUserToken());
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated, router } = this.props;
    if (prevProps.isAuthenticated && !isAuthenticated) router.push('/');
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

App = withRouter(App);

export default App;
