import { connect } from 'react-redux';

import CreateTrade from '../../components/trademanager/createtrade';
import * as actions from '../actions/trademanager';
import { getAllOwnerBooks } from '../actions/dashboard';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
  tradeManager: state.tradeManager,
  userBooks: state.dashboard.userBooks
});

const mapDispatchToProps = dispatch => ({
  getAllOwnerBooks,
  actions,
  dispatch
});

const CreateTradeContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTrade);

export default CreateTradeContainer;
