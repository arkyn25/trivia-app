import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetchToken from '../services/index';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyGameLogin = this.verifyGameLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  verifyGameLogin() {
    const { name, email } = this.state;
    return !(name && email);
  }

  async handleClick() {
    const { dispatchToken } = this.props;
    const token = await fetchToken();
    console.log(token.token);
    localStorage.setItem('token', token.token);
    /* const localToken = localStorage.getItem('token'); */
    dispatchToken(token.token);
    this.setState({ redirect: true });
  }

  render() {
    const { name, email, redirect } = this.state;
    if (redirect) return <Redirect to="/game" />;
    return (
      <div>
        <form>
          <input
            data-testid="input-player-name"
            name="name"
            value={ name }
            placeholder="Seu Nome"
            onChange={ this.handleChange }
          />
          <input
            data-testid="input-gravatar-email"
            name="email"
            value={ email }
            placeholder="Seu Email"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ this.verifyGameLogin() }
            onClick={ this.handleClick }
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (token) => dispatch(loginAction(token)),
});

export default connect(null, mapDispatchToProps)(Login);
