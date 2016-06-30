/* client entry point */
import { AppContainer as HotContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './app';
const rootElement = document.getElementById('root');

render(
  <HotContainer>
    <App />
  </HotContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    render(
      <HotContainer>
        <NextApp />
      </HotContainer>,
      rootElement
    );
  });
}
