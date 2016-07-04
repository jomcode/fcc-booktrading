// import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/app/app';
import * as actions from '../actions/auth';

const mapStateToProps = state => ({
  // auth: state.auth
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  // actions,
  actions,
  dispatch
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
