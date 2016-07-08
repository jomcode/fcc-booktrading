/* client entry point */
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
  <Root store={store} history={history} />,
  rootElement
);
