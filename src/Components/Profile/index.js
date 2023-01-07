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
    }
  }

  render() {
    const {profile, isLoading} = this.state
    console.log(isLoading)
    console.log(profile)
    const {name, profileImageUrl, shortBio} = profile
    console.log(name)
    console.log(profileImageUrl)
    console.log(shortBio)
    return (
      <div>
        {this.getProfileDetails()}
        <img src={profileImageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
    )
  }
}

export default Profile
