import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from '../redux/containers/appcontainer';
// import App from '../components/app/app';
import Index from '../components/index/index';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Index} />
  </Route>
);

export default routes;
