import {HiStar} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const SimilarJobs = props => {
  const {similarJobDetails} = props
  console.log(similarJobDetails)
  return (
    <ul>
      <h1>Similar Jobs</h1>
      <div className="similar-jobs-container">
        {similarJobDetails.map(eachone => (
          <div className="similar-jobs">
            <div className="top-section">
              <img
                src={eachone.companyLogoUrl}
                alt="similar job company logo"
                className="logo"
              />
              <div>
                <h1 className="title">{eachone.title}</h1>
                <div className="star-section">
                  <HiStar className="star" />
                  <p className="rating">{eachone.rating}</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="description-heading">Description</h1>
              <p className="description">{eachone.jobDescription}</p>
            </div>
            <div className="loc-emp">
              <div className="location-section">
                <IoLocationSharp id="location" className="location-logo" />
                <p htmlFor="location" className="location">
                  {eachone.location}
                </p>
              </div>
              <div className="employment-section">
                <BsBriefcaseFill id="employment" className="employment-logo" />
                <p htmlFor="employment" className="employment">
                  {eachone.employmentType}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  )
}

export default SimilarJobs
