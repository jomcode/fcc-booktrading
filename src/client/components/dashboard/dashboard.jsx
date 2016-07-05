import React, { Component } from 'react';
import { withRouter, Link, IndexLink } from 'react-router';

class Dashboard extends Component {
  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      // TODO fetch user data (pending trades, books, etc)
    }
  }

  render() {
    return (
      <div>
        <IndexLink to="/">Browse Books</IndexLink>
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
    );
  }
}

Dashboard = withRouter(Dashboard);

export default Dashboard;
