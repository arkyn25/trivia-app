import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeedBackHeader from './FeedBackHeader';

class Feedback extends React.Component {
  render() {
    const { assertions } = this.props;
    const assert = 3;
    return (
      <main>
        <FeedBackHeader />
        <span data-testid="feedback-total-question">{ assertions }</span>
        <p data-testid="feedback-text">
          { assertions >= assert
            ? 'Mandou bem!' : 'Podia ser melhor...' }
        </p>
        <Link
          data-testid="btn-play-again"
          to="/"
        >
          Jogar novamente
        </Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.loginReducer.assertions,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
