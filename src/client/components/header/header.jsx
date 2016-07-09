import React, { Component } from 'react';
import { Link } from 'react-router';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this._renderAuthenticated = this._renderAuthenticated.bind(this);
    this._renderUnAuthenticated = this._renderUnAuthenticated.bind(this);
  }

  _renderAuthenticated() {
    const { logoutHandler } = this.props;

    return (
      <header className="app-header">
        <div>
          <Link to="/">FCC Book Trading</Link>
        </div>

        <nav>
          <Link to="/">Add Books</Link>
          <Link to="/trade">Trade Books</Link>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logoutHandler}>Log Out</button>
        </nav>
      </header>
    );
  }

  _renderUnAuthenticated() {
    return (
      <header className="app-header">
        <div>
          <Link to="/">FCC Book Trading</Link>
        </div>

        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
    );
  }

  render() {
    const { isAuthenticated } = this.props;

    return isAuthenticated ?
      this._renderAuthenticated() :
      this._renderUnAuthenticated();
  }
}

export default Header;
