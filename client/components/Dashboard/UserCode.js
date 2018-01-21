import React, { Component } from 'react'

import { connect } from 'react-redux';

class UserCode extends Component{
  render() {
    return(
      <div className="p-code box">
        Your code is
        <span className="user-code"> { this.props.auth.p_code } </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(UserCode);
