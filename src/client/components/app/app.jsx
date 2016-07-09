import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NotificationSystem from 'react-notification-system';

import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
  constructor(props) {
    super(props);

    this._notificationSystem = null;
    this._handleLogout = this._handleLogout.bind(this);
    this._addNotification = this._addNotification.bind(this);
  }

  componentDidMount() {
    const { actions: { checkUserToken }, dispatch } = this.props;
    this._notificationSystem = this.refs.notificationSystem;
    dispatch(checkUserToken());
  }

  componentDidUpdate(prevProps) {
    const {
      notification: { notification },
      isAuthenticated,
      router
    } = this.props;

    if (notification) {
      const not = Object.assign({}, notification);
      this._addNotification(not);
    }

    if (prevProps.isAuthenticated && !isAuthenticated) {
      router.push('/');
    }
  }

  _handleLogout() {
    const { actions: { logoutUser }, isAuthenticated, dispatch } = this.props;
    if (isAuthenticated) dispatch(logoutUser());
  }

  _addNotification(notification) {
    this._notificationSystem.addNotification(notification);
  }

  render() {
    const { isAuthenticated, children } = this.props;

    return (
      <div>

        <NotificationSystem ref="notificationSystem" />

        <Header
          isAuthenticated={isAuthenticated}
          logoutHandler={this._handleLogout}
        />

        <div className="app-content">
          {children}
        </div>

        <Footer />
      </div>
    );
  }
}

App = withRouter(App);

export default App;
