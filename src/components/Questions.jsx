import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestion } from '../services';
import { questionAction } from '../actions';

class Questions extends Component {
  constructor() {
    super();

    this.multipleQuestion = this.multipleQuestion.bind(this);
    this.renderGamePage = this.renderGamePage.bind(this);
  }

  multipleQuestion(param) {
    console.log(param);
    const { category, question, correct_answer, incorrect_answers } = param;
    return (
      <div>
        <h6 data-testid="question-category">{ category }</h6>
        <p data-testid="question-text">
          { question }
        </p>
        <button type="button" data-testid="correct-answer">{ correct_answer }</button>
        { incorrect_answers.forEach((item, index) => (
          <button
            type="button"
            data-testid={ `wrong-answer-${index}` }
            key={ index }
          >
            { item }
          </button>
        ))}
      </div>
    );
  }

  async renderGamePage() {
    const { token, dispatchQuestions } = this.props;
    const response = await fetchQuestion(token);
    const questions = response.results;
    dispatchQuestions(questions);
    this.multipleQuestion(questions[0]);
  }

  render() {
    const { questions } = this.props;
    console.log(questions[0]);
    return (
      <main>
        {this.renderGamePage()}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
  questions: state.questionsReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchQuestions: (questions) => dispatch(questionAction(questions)),
});

Questions.propTypes = {
  token: PropTypes.string.isRequired,
  dispatchQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
