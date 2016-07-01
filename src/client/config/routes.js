import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app/app';
import Index from '../components/index/index';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
  </Route>
);

export default routes;
