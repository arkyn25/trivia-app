export const REQUEST_TOKEN = 'REQUEST_TOKEN';

export const loginAction = (token) => ({
  type: REQUEST_TOKEN, token,
});
