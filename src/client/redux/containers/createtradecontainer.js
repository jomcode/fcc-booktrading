import { connect } from 'react-redux';

import CreateTrade from '../../components/trademanager/createtrade';
import * as actions from '../actions/trademanager';
import { getAllOwnerBooks } from '../actions/dashboard';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
  userBooks: state.dashboard.userBooks,
  createTrade: state.createTrade
});

const mapDispatchToProps = dispatch => ({
  getAllOwnerBooks,
  actions,
  dispatch
});

const CreateTradeContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTrade);

export default CreateTradeContainer;
