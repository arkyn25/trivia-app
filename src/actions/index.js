export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_EMAIL = 'REQUEST_EMAIL';
export const REQUEST_MD5 = 'REQUEST_MD5';
export const REQUEST_NOME = 'REQUEST_NOME';

export const loginAction = (token) => ({
  type: REQUEST_TOKEN, token,
});

export const emailAction = (email) => ({
  type: REQUEST_EMAIL, email,
});

export const md5Action = (md5) => ({
  type: REQUEST_MD5, md5,
});

export const nomeAction = (nome) => ({
  type: REQUEST_NOME, nome,
});
