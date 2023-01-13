import {Link} from 'react-router-dom'
import './index.css'
import {HiStar} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'

const JobCard = props => {
  const {jobDetails, gotoJobDetails} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  /* const openJobdetails = () => {
    gotoJobDetails(id)
  } */

  return (
    <Link to={`/jobdetails${id}`}>
      <li className="card-container">
        <div className="top-section">
          <img src={companyLogoUrl} alt="company logo" className="logo" />
          <div>
            <p className="title">{title}</p>
            <div className="star-section">
              <HiStar className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="middle-section">
          <div className="loc-emp">
            <div className="location-section">
              <IoLocationSharp id="location" className="location-logo" />
              <label htmlFor="location" className="location">
                {location}
              </label>
            </div>
            <div className="employment-section">
              <BsBriefcaseFill id="employment" className="employment-logo" />
              <label htmlFor="employment" className="employment">
                {employmentType}
              </label>
            </div>
          </div>
          <p className="title">{packagePerAnnum}</p>
        </div>
        <hr />
        <div className="third-section">
          <p className="description-heading">Description</p>
          <p className="description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
