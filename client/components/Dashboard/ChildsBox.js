import React, { Component } from 'react'

import { connect } from 'react-redux';

import UserCard from './UserCard'

class ChildsBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      size: 5
    }
  }

  expandChilds(){
    if(this.state.size == 5){
      this.setState({
        size: this.props.auth.childs.length || 100
      })
    } else {
      this.setState({
        size: 5
      })
    }
  }

  render(){
    return(
      <div className="childs box">
        <h2>
          Users using you code
          <span className="badge badge-info">
            {this.props.auth.childs.length}
          </span>
        </h2>
        <ul>
        {
          this.props.auth.childs.slice(0, this.state.size).map((user) => {
            return (
              <UserCard key={user.id} user={user} />
            )
          })
        }
        </ul>
        {
          this.props.auth.childs.length > this.state.size &&
          <a className="btn btn-link extand-childs-btn" onClick={ () => this.expandChilds() }>See all</a>
        }
        {
          this.props.auth.childs.length <= this.state.size &&
          this.props.auth.childs.length > 5 &&
          <a className="btn btn-link extand-childs-btn" onClick={ () => this.expandChilds() }>See less</a>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ChildsBox);
