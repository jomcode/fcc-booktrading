import React, { Component } from 'react';
import { Link } from 'react-router';

import './header.scss';

class Header extends Component {
  render() {
    const { isAuthenticated, logoutHandler } = this.props;

    return (
      <header className="app-header">
        <Link to="/">Add Books</Link>
        <Link to="/trade">Trade Books</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
        {
          isAuthenticated ?
            <button onClick={logoutHandler}>Log Out</button> :
            null
        }
      </header>
    );
  }
}

export default Header;
