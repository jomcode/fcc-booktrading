import { connect } from 'react-redux';

import Index from '../../components/index/index';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// const mapDispatchToProps = dispatch => ({
  // dispatch
// });

// const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);
const IndexContainer = connect(mapStateToProps)(Index);

export default IndexContainer;
