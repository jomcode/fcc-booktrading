import { connect } from 'react-redux';

import BookBrowser from '../../components/bookbrowser/bookbrowser';
import * as actions from '../actions/bookbrowser';

const mapStateToProps = state => ({
  bookBrowser: state.bookBrowser,
  bookSearch: state.bookSearch,
  saveBook: state.saveBook,
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user._id
});

const mapDispatchToProps = dispatch => ({
  actions,
  dispatch
});

const BookBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(BookBrowser);

export default BookBrowserContainer;
