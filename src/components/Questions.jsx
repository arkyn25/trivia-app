import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestion } from '../services';
import { questionAction } from '../actions';

class Questions extends Component {
  async componentDidMount() {
    const { token, dispatchQuestions } = this.props;
    const response = await fetchQuestion(token);
    const questions = response.results;
    dispatchQuestions(questions);
  }

  render() {
    return (
      <main>
        {}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchQuestions: (questions) => dispatch(questionAction(questions)),
});

Questions.propTypes = {
  token: PropTypes.string.isRequired,
  dispatchQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
