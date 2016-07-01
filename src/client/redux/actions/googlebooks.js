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

const getBooksFromGoogle = () => dispatch => {
  dispatch(getGoogleBooks());

  feathers.getGoogleBooks()
    .then(r => console.log(r))
    .catch(e => console.error(e));
};

export { getBooksFromGoogle };
