import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from '../redux/containers/appcontainer';
import IndexContainer from '../redux/containers/indexcontainer';
import RegisterContainer from '../redux/containers/registercontainer';
import LogInContainer from '../redux/containers/logincontainer';
import DashboardContainer from '../redux/containers/dashboardcontainer';
import EditProfileContainer from '../redux/containers/editprofilecontainer';
import TradeManagerContainer from '../redux/containers/trademanagercontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexContainer} />
    <Route path="/register" component={RegisterContainer} />
    <Route path="/login" component={LogInContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
    <Route path="/profile/edit" component={EditProfileContainer} />
    <Route path="/trade" component={TradeManagerContainer} />
  </Route>
);

export default routes;
