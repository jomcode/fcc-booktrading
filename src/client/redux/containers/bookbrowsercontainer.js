import { connect } from 'react-redux';


import BookBrowser from '../../components/bookbrowser/bookbrowser';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const BookBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(BookBrowser);

export default BookBrowserContainer;
