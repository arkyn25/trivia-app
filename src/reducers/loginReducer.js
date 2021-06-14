import { REQUEST_TOKEN } from '../actions';

const INITIAL_STATE = {
  token: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    console.log(action.token);
    return {
      ...state,
      token: action.token,
    };
  default:
    return state;
  }
};

export default loginReducer;
