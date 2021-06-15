import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestion } from '../services';

class Questions extends Component {
  async componentDidMount() {
    const { token } = this.props;
    const response = await fetchQuestion(token);
    const questions = response.results;
    console.log(questions);
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

Questions.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Questions);
