import { fetchQuestion } from '../services';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';

export const loginAction = (token) => ({
  type: REQUEST_TOKEN, token,
});

export const questionAction = (token) => async (dispatch) => {
  const response = await fetchQuestion(token);
  const questions = response.results;
  dispatch({
    type: REQUEST_QUESTIONS, questions,
  });
};
