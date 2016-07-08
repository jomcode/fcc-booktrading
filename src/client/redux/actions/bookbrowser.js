import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

/* Get Google Books */
const getGoogleBooks = () => ({
  type: ActionTypes.GET_GOOGLE_BOOKS
});

const getGoogleBooksSuccess = (books) => ({
  type: ActionTypes.GET_GOOGLE_BOOKS_SUCCESS,
  payload: {
    books
  }
});

const getGoogleBooksFailure = (error) => ({
  type: ActionTypes.GET_GOOGLE_BOOKS_FAILURE,
  error
});

const resetGetGoogleBooks = () => ({
  type: ActionTypes.RESET_GET_GOOGLE_BOOKS
});

const getBooksFromGoogle = (query) => dispatch => {
  dispatch(getGoogleBooks());

  feathers.getGoogleBooks(query)
    .then(r => {
      const books = r.slice();
      dispatch(getGoogleBooksSuccess(books));
    })
    .catch(e => dispatch(getGoogleBooksFailure(e)));
};

export { getBooksFromGoogle, resetGetGoogleBooks };

/* Save Book to User */
const saveUserBook = () => ({
  type: ActionTypes.SAVE_USER_BOOK
});

const saveUserBookSuccess = (book) => ({
  type: ActionTypes.SAVE_USER_BOOK_SUCCESS,
  payload: {
    book
  }
});

const saveUserBookFailure = (error) => ({
  type: ActionTypes.SAVE_USER_BOOK_FAILURE,
  error
});

const resetSaveUserBook = () => ({
  type: ActionTypes.RESET_SAVE_USER_BOOK
});

const saveBookToUser = (data) => dispatch => {
  dispatch(saveUserBook());

  feathers.saveUserBook(data)
    .then(r => dispatch(saveUserBookSuccess(r)))
    .catch(e => dispatch(saveUserBookFailure(e)));
};

export { saveBookToUser, resetSaveUserBook };
