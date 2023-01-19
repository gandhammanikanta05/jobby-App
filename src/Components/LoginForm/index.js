import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onLoginuser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  enterusername = event => {
    this.setState({username: event.target.value})
  }

  enterpassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    console.log(showErrorMsg)
    console.log(errorMsg)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <form className="login-card" onSubmit={this.onLoginuser}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              type="input"
              placeholder="Username"
              id="username"
              onChange={this.enterusername}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.enterpassword}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
