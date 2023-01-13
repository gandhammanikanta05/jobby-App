import {HiStar} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'
import SimilarJobDetails from '../SimilarJobDetails'

const SimilarJobs = props => {
  const {similarJobDetails} = props
  console.log(similarJobDetails)
  return (
    <ul>
      <h1>Similar Jobs</h1>
      <div>
        {similarJobDetails.map(eachone => (
          <div className="top-section">
            <img
              src={eachone.companyLogoUrl}
              alt="company logo"
              className="logo"
            />
            <div>
              <p className="title">{eachone.title}</p>
              <div className="star-section">
                <HiStar className="star" />
                <p className="rating">{eachone.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  )
}

export default SimilarJobs
