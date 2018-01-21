import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';

class BootstrapNavbar extends React.Component {
  constructor(props){
      super(props);
      this.state = { showMenu: false }
  }

  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  }

  authLinks = () =>{
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        <li>
          <a href='#' onClick={this.logout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            Logout
          </a>
        </li>
      )
    } else {
      return(<li> <Link to='/login'>Login</Link> </li>);
    }
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick= { () => this.setState({ showMenu: !this.state.showMenu }) }
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">MyPrivateCloset</a>
          </div>

          <div className="collapse navbar-collapse" style={
            {
              display: this.state.showMenu? "block" : "none"
            }
          } id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              { this.authLinks() }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(BootstrapNavbar);
