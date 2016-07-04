import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from '../redux/containers/appcontainer';
import Index from '../components/index/index';
import RegisterContainer from '../redux/containers/registercontainer';
import LogInContainer from '../redux/containers/logincontainer';
import DashboardContainer from '../redux/containers/dashboardcontainer';
import EditProfileContainer from '../redux/containers/editprofilecontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Index} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/login" component={LogInContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
    <Route path="/profile/edit" component={EditProfileContainer} />
  </Route>
);

export default routes;
