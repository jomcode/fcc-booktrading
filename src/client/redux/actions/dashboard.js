import * as ActionTypes from '../constants';
import feathers from '../../services/feathers';

const getOwnerBooks = () => ({
  type: ActionTypes.GET_OWNER_BOOKS
});

const getOwnerBooksSuccess = (books) => ({
  type: ActionTypes.GET_OWNER_BOOKS_SUCCESS,
  payload: {
    books
  }
});

const getOwnerBooksFailure = (error) => ({
  type: ActionTypes.GET_OWNER_BOOKS_FAILURE,
  error
});

const resetGetOwnerBooks = () => ({
  type: ActionTypes.RESET_GET_OWNER_BOOKS
});

const getAllOwnerBooks = () => dispatch => {
  dispatch(getOwnerBooks());

  feathers.getAllOwnerBooks()
    .then(r => {
      const books = r.map(b => Object.assign({}, {
        bookId: b._id,
        googleId: b.googleId,
        title: b.title
      }));
      dispatch(getOwnerBooksSuccess(books));
    })
    .catch(e => dispatch(getOwnerBooksFailure(e)));
};

export { getAllOwnerBooks, resetGetOwnerBooks };
