import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Profile extends Component {
  state = {
    profile: [],
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  tryagainProfile = () => {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      // console.log(updatedData)
      this.setState({profile: updatedData})
    } else {
      ;<div>
        <button type="button" onClick={this.tryagainProfile}>
          Retry
        </button>
      </div>
    }
  }

  render() {
    const {profile} = this.state
    const {name, profileImageUrl, shortBio} = profile
    return (
      <div className="profile-section">
        <img src={profileImageUrl} alt="profile" />
        <h1 className="name">{name}</h1>
        <p className="role">{shortBio}</p>
      </div>
    )
  }
}

export default Profile
