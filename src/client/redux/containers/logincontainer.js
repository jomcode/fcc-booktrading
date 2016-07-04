import { connect } from 'react-redux';

import LogIn from '../../components/login/login';
import * as actions from '../actions/login';

const mapStateToProps = state => ({
  logIn: state.logIn
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default LogInContainer;
