export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_EMAIL = 'REQUEST_EMAIL';

export const loginAction = (token) => ({
  type: REQUEST_TOKEN, token,
});

export const emailAction = (email) => ({
  type: REQUEST_EMAIL, email,
});
