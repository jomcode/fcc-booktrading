import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from '../redux/containers/appcontainer';
// import App from '../components/app/app';
import Index from '../components/index/index';
import RegisterContainer from '../redux/containers/registercontainer';
import LogInContainer from '../redux/containers/logincontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Index} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/login" component={LogInContainer} />
  </Route>
);

export default routes;
