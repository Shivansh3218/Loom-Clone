// userActionTypes.js
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// userActions.js
// import { LOGIN_USER, LOGOUT_USER } from './userActionTypes';

export const loginUser = (username, token) => ({
  type: LOGIN_USER,
  payload: { username, token },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
