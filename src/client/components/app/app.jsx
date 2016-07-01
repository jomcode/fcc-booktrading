import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
  componentDidMount() {
    const { actions, dispatch } = this.props;
    dispatch(actions.checkUserToken());
  }

  render() {
    const { auth, actions, dispatch, children } = this.props;

    return (
      <div>
        <Header />

        {children}

        <Footer />
      </div>
    );
  }
}

export default App;
