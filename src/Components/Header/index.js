import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {newprops} = props
  const onclickHomePage = () => {
    const {history} = newprops
    history.replace('/')
  }

  const onclickLogout = () => {
    const {history} = newprops
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="logo"
        onClick={onclickHomePage}
      />
      <div>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/jobs" className="jobs">
          Jobs
        </Link>
      </div>
      <button type="button" className="logout-btn" onClick={onclickLogout}>
        Logout
      </button>
    </div>
  )
}
export default Header
