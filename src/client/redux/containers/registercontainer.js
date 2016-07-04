import { connect } from 'react-redux';

import Register from '../../components/register/register';
import * as actions from '../actions/register';

const mapStateToProps = state => ({
  register: state.register
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;
