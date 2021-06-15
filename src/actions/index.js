export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';

export const loginAction = (token) => ({
  type: REQUEST_TOKEN, token,
});

export const questionAction = (questions) => ({
  type: REQUEST_QUESTIONS, questions,
});
