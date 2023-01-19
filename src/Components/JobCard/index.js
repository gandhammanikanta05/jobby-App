import {Link} from 'react-router-dom'
import './index.css'
import {HiStar} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'

const JobCard = props => {
  const {jobDetails} = props
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

  return (
    <Link to={`/jobs/${id}`}>
      <li className="card-container">
        <div className="top-section">
          <img src={companyLogoUrl} alt="company logo" className="logo" />
          <div>
            <h1 className="title">{title}</h1>
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
              <p htmlFor="location" className="location">
                {location}
              </p>
            </div>
            <div className="employment-section">
              <BsBriefcaseFill id="employment" className="employment-logo" />
              <p htmlFor="employment" className="employment">
                {employmentType}
              </p>
            </div>
          </div>
          <p className="title">{packagePerAnnum}</p>
        </div>
        <hr />
        <div className="third-section">
          <h1 className="description-heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
