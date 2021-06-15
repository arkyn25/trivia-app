import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { questionAction } from '../actions';

class Questions extends Component {
  constructor() {
    super();

    this.multipleQuestion = this.multipleQuestion.bind(this);
  }

  componentDidMount() {
    const { token, dispatchQuestions } = this.props;
    dispatchQuestions(token);
  }

  multipleQuestion(param) {
    const { category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = param;
    return (
      <div>
        <h3 data-testid="question-category">{ category }</h3>
        <p data-testid="question-text">
          { question }
        </p>
        <button type="button" data-testid="correct-answer">{ correctAnswer }</button>
        { incorrectAnswers.map((item, index) => (
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

  render() {
    const { questions } = this.props;
    console.log(questions[0]);
    return (
      <main>
        { questions.length > 0 ? this.multipleQuestion(questions[0]) : null}
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
  questions: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
