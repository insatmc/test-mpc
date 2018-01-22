import React, { Component } from 'react'

import { connect } from 'react-redux';

import {CopyToClipboard} from 'react-copy-to-clipboard';


class UserCode extends Component{
  constructor(props){
    super(props)
    this.state = {
      copied: false
    }
  }

  copyDone(){
    this.setState({copied: true})
    window.setTimeout( () => {
      this.setState({copied: false})
    }, 3000)
  }

  render() {
    return(
      <div className="p-code box">
        Your code is
        <span className="user-code"> { this.props.auth.p_code } </span>
        <div className="share-link">
          {
            this.state.copied &&
            <div className="tooltip bs-tooltip-top" role="tooltip">
              <div className="arrow"></div>
              <div className="tooltip-inner">
                Link copied!
              </div>
            </div>
          }

          <CopyToClipboard text={"http://localhost:3000/sign_up/"+this.props.auth.p_code}
            onCopy={() => this.copyDone()  }>
            <div>
              <a className="btn-link btn-share">
                Share link with friends
              </a>
            </div>
          </CopyToClipboard>
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

export default connect(mapStateToProps)(UserCode);
