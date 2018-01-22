import React, {Component} from 'react'
import { connect } from 'react-redux';
import { getProfileData, updateCode } from '../../actions/auth';
import axios from 'axios'

class NoSponsorBox extends Component {
  updateCode(){
    let p_code = this.refs.p_code.value;

    updateCode(this.props.dispatch, p_code)
  }

  render() {
    return(
      <div className="sponsor box">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        The provided Code doesn{"'"}t correspend to any user.
        <div className="change-code">
          <input className="form-control" ref='p_code' type='text' placeholder='PCode' />
          <button className="btn btn-success" onClick={() => this.updateCode()}>Use this code</button>
        </div>
      </div>
    )
  }
}

export default connect()(NoSponsorBox);
