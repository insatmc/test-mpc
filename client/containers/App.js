import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import FlashMessage from '../components/FlashMessage';
import { clearFlash } from '../actions/flash';
import { getProfileData, requestProfileData, login, logout } from '../actions/auth'
import Auth from 'j-toker';
import axios from 'axios';

import './style.scss'


class App extends React.Component {
  componentDidMount() {
    let { dispatch, history } = this.props;

    Auth.configure({
      apiUrl: '/api'
    });

    Auth.validateToken()
    .then( user => {
      dispatch(login(user));
      requestProfileData(dispatch)
      history.push('/dashboard');
    })
    .fail( () => {
      if (window.location.href.indexOf("sign_up") == -1) {
        history.push('/login');
      }
    });
  }

  componentDidUpdate() {
    let { dispatch, history } = this.props;
    dispatch(clearFlash());
  }

  render() {
    let { auth, children } = this.props;

    return(
      <div>
        <Navbar />
        <div style={{ marginBottom: '30px' }}>
          <FlashMessage />
        </div>
        <div className='container'>
          { children }
        </div>
      </div>
    );
  }
}



export default connect()(App);
