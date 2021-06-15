import { REQUEST_TOKEN, REQUEST_EMAIL, REQUEST_MD5, REQUEST_NOME } from '../actions';

const INITIAL_STATE = {
  token: '',
  email: '',
  md5: '',
  nome: '',
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
  case REQUEST_MD5:
    return {
      ...state,
      md5: action.md5,
    };
  case REQUEST_NOME:
    return {
      ...state,
      nome: action.nome,
    };
  default:
    return state;
  }
};

export default loginReducer;
