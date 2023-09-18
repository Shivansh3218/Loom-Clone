import { LOGIN_USER, LOGOUT_USER } from './userActions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: {
          username: action.payload.username,
          token: action.payload.token,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
