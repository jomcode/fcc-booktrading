import { connect } from 'react-redux';

import TradeManager from '../../components/trademanager/trademanager';
import * as actions from '../actions/trademanager';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id,
  tradeManager: state.tradeManager
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const TradeManagerContainer = connect(mapStateToProps, mapDispatchToProps)(TradeManager);

export default TradeManagerContainer;
