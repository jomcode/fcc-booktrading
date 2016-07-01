/* Login - get token from server */
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const RESET_LOGIN = 'RESET_LOGIN';

/* Logout - remove token from localStorage */
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const RESET_LOGOUT = 'RESET_LOGOUT';

/* Check for valid token already in localStorage */
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';
export const RESET_CHECK_TOKEN = 'RESET_CHECK_TOKEN';

/* Get Books from Google Books API */
export const GET_GOOGLE_BOOKS = 'GET_GOOGLE_BOOKS';
export const GET_GOOGLE_BOOKS_SUCCESS = 'GET_GOOGLE_BOOKS_SUCCESS';
export const GET_GOOGLE_BOOKS_FAILURE = 'GET_GOOGLE_BOOKS_FAILURE';
export const RESET_GET_GOOGLE_BOOKS = 'RESET_GET_GOOGLE_BOOKS';
