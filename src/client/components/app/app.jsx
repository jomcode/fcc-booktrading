import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {
  render() {
    const { children } = this.props;

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
