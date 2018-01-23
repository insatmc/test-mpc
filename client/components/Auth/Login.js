import React from 'react';
import { handleLogin, getProfileData } from '../../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import Auth from 'j-toker';

import './style.scss'

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password));
  }

  render() {
    return(
      <div className="login-wrapper">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={ this.handleSubmit }>
            <input className="form-control" ref='email' type='text' required placeholder='Email' />
            <input className="form-control" ref='password' type='password' required placeholder='Password' />
            <input type='submit' className='btn btn-success' />
          </form>
          <Link to='/sign_up' className="btn-link">
            New user? Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
