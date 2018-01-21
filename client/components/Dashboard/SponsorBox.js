import React, { Component } from 'react'

import { connect } from 'react-redux';


class SponsorBox extends Component{
  render(){
    return(
      <div className="sponsor box">
        You are using the code of:
        <div className="user-box">
          <div className="user-image" style={
            {
              backgroundImage: this.props.auth.sponsor.image &&
                               `url(${this.props.auth.sponsor.image})`
            }
          }></div>
          <span className="sponsor-name">
            <span>{this.props.auth.sponsor.name}</span>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(SponsorBox);
