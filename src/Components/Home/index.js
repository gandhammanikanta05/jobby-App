import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onclickJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <div className="home-container">
      <Header newprops={props} />
      <div className="bottom-section">
        <h1 className="heading">
          Find The Job That <br /> Fits Your Life
        </h1>
        <p className="para">
          Millions of people are searching for jobs, salary <br /> information,
          company reviews. Find the job that fits your <br /> abilities and
          potential.
        </p>
        <Link to="/jobs">
          <button
            type="button"
            className="jobs-btn"
            data-testid="searchButton"
            onClick={onclickJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
