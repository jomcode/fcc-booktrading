import React, { Component } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        app.jsx
        {children}
      </div>
    );
  }
}

export default App;
