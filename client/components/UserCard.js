import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    return(
      <li key={this.props.user.id} className="user-box">
        <div className="user-image" style={
          {
            backgroundImage: this.props.user.image && `url(${this.props.user.image})`
          }
        }></div>
        { this.props.user.name }
      </li>
    )
  }
}

export default UserCard
