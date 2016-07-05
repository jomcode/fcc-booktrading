import React, { Component } from 'react';
import { withRouter, Link, IndexLink } from 'react-router';

import BookOverview from '../bookoverview/bookoverview';

class Dashboard extends Component {
  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidMount() {
    const {
      actions: { getAllOwnerBooks },
      dispatch,
      isAuthenticated,
      userId
    } = this.props;

    if (isAuthenticated) {
      // TODO fetch user data (pending trades, books, etc)
      dispatch(getAllOwnerBooks({ ownerId: userId }));
    }
  }

  render() {
    const { dashboard: { userBooks } } = this.props;

    return (
      <div>
        <IndexLink to="/">Browse Books</IndexLink>
        <Link to="/profile/edit">Edit Profile</Link>

        <BookOverview books={userBooks} />
      </div>
    );
  }
}

Dashboard = withRouter(Dashboard);

export default Dashboard;
