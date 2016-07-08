/* client entry point */
if (process.env.HMR === 'enabled') require('react-hot-loader/patch');

import { AppContainer as HotContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './main.scss';
import Root from './components/root/root';
import configureStore from './redux/store/configurestore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const rootElement = document.getElementById('root');

render(
  <HotContainer>
    <Root store={store} history={history} />
  </HotContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/root/root', () => {
    const NextApp = require('./components/root/root').default;

    render(
      <HotContainer>
        <NextApp store={store} history={history} />
      </HotContainer>,
      rootElement
    );
  });
}
