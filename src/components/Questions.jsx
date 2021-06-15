import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestion } from '../services';
import { questionAction } from '../actions';

class Questions extends Component {
  constructor() {
    super();

    this.multipleQuestion = this.multipleQuestion.bind(this);
  }

  async componentDidMount() {
    const { token, dispatchQuestions } = this.props;
    const response = await fetchQuestion(token);
    const questions = response.results;
    dispatchQuestions(questions);
  }

  multipleQuestion(param) {
    const { category, question, correct_answer, incorrect_answers } = param;
    return (
      <div>
        <h6 data-testid="question-category">{ category }</h6>
        <p data-testid="question-text">
          { question }
        </p>
        <li data-testid="question-text">{ correct_answer }</li>
        {incorrect_answers.map((item, index) => <li key={ index }>{ item }</li>)}
      </div>
    );
  }

  render() {
    const { questions } = this.props;
    console.log(questions[0]);
    return (
      <main>
        {/* { this.multipleQuestion(questions[0])} */}
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
