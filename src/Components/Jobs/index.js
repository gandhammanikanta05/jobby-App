import {Component} from 'react'
import Header from '../Header'
import Profile from '../Profile'
import './index.css'

class Jobs extends Component {
  state = {
    jobsList: [],
  }

  render() {
    return (
      <div className="jobs-container">
        <Header newprops={this.props} />
        <div className="bottom-container">
          <div className="left-section">
            <Profile />
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
