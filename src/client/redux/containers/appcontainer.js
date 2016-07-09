import { connect } from 'react-redux';

import App from '../../components/app/app';
import * as actions from '../actions/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  notification: state.notification
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
