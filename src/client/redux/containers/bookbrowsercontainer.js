import { connect } from 'react-redux';

import BookBrowser from '../../components/bookbrowser/bookbrowser';
import * as actions from '../actions/bookbrowser';

const mapStateToProps = state => ({
  bookBrowser: state.bookBrowser,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const BookBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(BookBrowser);

export default BookBrowserContainer;
