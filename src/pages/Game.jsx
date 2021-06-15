import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* import md5 from 'crypto-js/md5';
import hash from '../components/hash'; */

class Game extends Component {
  render() {
    const { getEmail } = this.props;
    return (
      <div>
        { getEmail }
      </div>
    );
  }
}

Game.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.loginReducer.email,
});

export default connect(mapStateToProps)(Game);
