import { REQUEST_TOKEN, REQUEST_EMAIL } from '../actions';

const INITIAL_STATE = {
  token: '',
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  case REQUEST_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default loginReducer;
