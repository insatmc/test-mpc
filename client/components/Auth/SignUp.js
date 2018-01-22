import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    if (props.routeParams.p_code) {
      this.p_code =  props.routeParams.p_code
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let p_code = this.refs.p_code.value;

    this.props.dispatch(handleSignUp(name, email, password, p_code));
  }

  render() {
    return(
      <div className="login-wrapper">
        <div className="login-container">
          <h1>Sign Up</h1>
          <form onSubmit={ this.handleSubmit }>
            <input className="form-control" ref='name' type='text' placeholder='Full Name' />
            <input className="form-control" ref='email' type='text' required placeholder='Email' />
            <input className="form-control" ref='password' type='password' required placeholder='Password' />
            {
              !this.p_code &&
              <input className="form-control" ref='p_code' type='text' placeholder='PCode' />
            }
            {
              this.p_code &&
              <input value={this.p_code} type="hidden" ref='p_code' />
            }
            <br />
            <input type='submit' className='btn btn-success' value='Sign Up' />
            <Link to='/login' className='btn grey'>Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SignUp);
