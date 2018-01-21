import React, {Component} from 'react'

class NoSponsorBox extends Component {
  render() {
    return(
      <div className="sponsor box">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
        The provided Code doesn{"'"}t correspend to any user.
        <div className="change-code">
          <input className="form-control" ref='p_code' type='text' placeholder='PCode' />
          <button className="btn btn-success">Use this code</button>
        </div>
      </div>
    )
  }
}

export default NoSponsorBox
