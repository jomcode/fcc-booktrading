import { connect } from 'react-redux';

import Dashboard from '../../components/dashboard/dashboard';
// import * as actions from '../actions/dashboard';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// const mapDispatchToProps = dispatch => ({
  // actions,
  // dispatch
// });

// const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;
