import React, { Component } from 'react';

import Questions from '../components/Questions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Game extends Component {
  render() {
    const { getNome, getMd5 } = this.props;
    const url = `https://www.gravatar.com/avatar/${getMd5}`;
    return (

      <div>
        d
        <Questions />
      </div>

      <header>
        <img
          data-testid="header-profile-picture"
          src={ url }
          alt="ls"
        />
        <p data-testid="header-player-name">
          { getNome }
        </p>
        <p data-testid="header-score">0</p>
      </header>

    );
  }
}

Game.propTypes = {
  getNome: PropTypes.string.isRequired,
  getMd5: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getNome: state.loginReducer.nome,
  getMd5: state.loginReducer.md5,
});

export default connect(mapStateToProps)(Game);
