import { connect } from 'react-redux';

import Dashboard from '../../components/dashboard/dashboard';
import * as actions from '../actions/dashboard';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;
