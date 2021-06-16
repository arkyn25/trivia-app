import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionAction } from '../actions';
import './Questions.css';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      seconds: 30,
      buttonsDisabled: false,
      questionIndex: 0,
      redirect: false,
    };
    this.multipleQuestion = this.multipleQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    const { token, dispatchQuestions } = this.props;
    const ONE_SECOND = 1000;
    const FIVE_SECONDS = 5000;
    dispatchQuestions(token);
    this.countdownInterval = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState({ seconds: seconds - 1 });
      }
      if (seconds === 0) {
        this.setState({ buttonsDisabled: true });
        setTimeout(() => { this.setState({ active: true }); }, FIVE_SECONDS);
      }
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  handleClick() {
    this.setState({ active: true });
  }

  nextQuestion() {
    const { questions } = this.props;
    const { questionIndex, redirect } = this.state;
    console.log(questionIndex);
    console.log(redirect);
    if (questionIndex === questions.length - 1) {
      this.setState({ redirect: true });
    }
    this.setState({
      questionIndex: questionIndex + 1,
      seconds: 30,
      active: false,
    });
  }

  multipleQuestion(param) {
    const { category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = param;
    const { active, seconds, buttonsDisabled } = this.state;
    return (
      <div>
        <h3 data-testid="question-category">{ category }</h3>
        <p data-testid="question-text">{ question }</p>
        <button
          onClick={ this.handleClick }
          className={ active ? 'acertou' : null }
          type="button"
          data-testid="correct-answer"
          disabled={ buttonsDisabled }
        >
          { correctAnswer }
        </button>
        { incorrectAnswers.map((item, index) => (
          <button
            onClick={ this.handleClick }
            className={ active ? 'errou' : null }
            type="button"
            data-testid={ `wrong-answer-${index}` }
            key={ index }
            disabled={ buttonsDisabled }
          >
            { item }
          </button>
        ))}
        <h2>{ seconds }</h2>
      </div>
    );
  }

  renderNextButton() {
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => this.nextQuestion() }
      >
        Próxima
      </button>
    );
  }

  render() {
    const { questions } = this.props;
    const { questionIndex, active, redirect } = this.state;
    if (redirect) return <Redirect to="/feedback" />;
    return (
      <main>
        {/* { redirect && (<Redirect to="/feedback" />)} */}
        <div>
          { questions.length > 0 ? this.multipleQuestion(questions[questionIndex]) : null}
        </div>
        { active ? this.renderNextButton() : null }
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
