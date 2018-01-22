import { browserHistory } from 'react-router';
import { setFlash } from './flash';
import Auth from 'j-toker';
import axios from 'axios';

export const requestProfileData = (dispatch) => {
  axios.get("/profiles/index", {
    headers: Auth.retrieveData('authHeaders')
  }).then((res) =>{
    dispatch(getProfileData(res.data))
  })
}

export const updateCode = (dispatch, p_code) => {
  axios.post("/profiles/update_code", {
    p_code
  } ,{
    headers: Auth.retrieveData('authHeaders')
  }).then((res) =>{
    dispatch(getProfileData(res.data))
  })
}

const logout = () => {
  return { type: 'LOGOUT' }
}

export const login = (user) => {
  return { type: 'LOGIN', user }
}

const authErrors = (errors) => {
  let message = '';
  let msgType = 'error';
  errors.forEach( error => {
    message += `${error} `
  });
  return { type: 'SET_FLASH', message, msgType }
}

export const handleLogin = (email, password) => {
  return(dispatch) => {
    Auth.emailSignIn({
      email,
      password
    }).then( user => {
      dispatch(login(user.data));
      requestProfileData(dispatch)
      browserHistory.push('/dashboard');
    }).fail( res => {
      dispatch(authErrors(res.data.errors));
    });
  }
}

export const handleLogout = () => {
  return(dispatch) => {
    Auth.signOut()
      .then( res => {
        dispatch(logout());
        browserHistory.push('/login');
      });
  }
}

export const handleSignUp = (name, email, password, p_code) => {
  return(dispatch) => {
    Auth.emailSignUp({
      name,
      email,
      password,
      p_code,
      password_confirmation: password
    }).then( user => {
      dispatch(login(user.data));
      requestProfileData(dispatch)
      browserHistory.push('/dashboard');
    }).fail( res => {
      dispatch(authErrors(res.data.errors.full_messages));
    });
  }
}


export const getProfileData = (data) => {
  return {
    type: "GET_PROFILE_DATA",
    payload: data
  }
}
