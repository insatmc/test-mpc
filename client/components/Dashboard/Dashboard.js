import React from 'react';
import { handleLogin } from '../../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import UserCode from './UserCode'
import SponsorBox from './SponsorBox'
import NoSponsorBox from './NoSponsorBox'
import ChildsBox from './ChildsBox'

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h1 className="heading">Dashboard</h1>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <UserCode />

            {
              this.props.auth.sponsor &&
              <SponsorBox />
            }

            {
              !this.props.auth.sponsor &&
              <NoSponsorBox />
            }
          </div>
          <div className="col-sm-6 col-xs-12">
            {
              this.props.auth.childs && this.props.auth.childs.length > 0 &&
              <ChildsBox auth={this.props.auth} />
            }
            {
              this.props.auth.childs && this.props.auth.childs.length == 0 &&
              <div className="childs box">
                <h3>
                  No one using your code yet
                </h3>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
