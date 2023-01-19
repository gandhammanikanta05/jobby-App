import {HiStar} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import SimilarJobs from '../SimilarJobs'
import './index.css'

const JobDetailsMatter = props => {
  const {jobDetails, skillsList, updatedLifeAtCompany, similarJobs} = props

  const companyLogoUrl = jobDetails.company_logo_url
  const companyWebsiteUrl = jobDetails.company_website_url
  const employmentType = jobDetails.employment_type
  const jobDescription = jobDetails.job_description
  // const lifeAtCompany = jobDetails.life_at_company
  // const lifeAtCompanyDescription = jobDetails.life_at_company.description
  // const lifeAtCompanyImageUrl = jobDetails.life_at_company.image_url
  const locations = jobDetails.location
  const packagePerAnnum = jobDetails.package_per_annum
  const ratings = jobDetails.rating
  const titles = jobDetails.title
  // console.log(lifeAtCompanyDescription)
  // console.log(lifeAtCompanyImageUrl)
  return (
    <div className="main-container">
      <div className="top-section">
        <img src={companyLogoUrl} alt="company logo" className="logo" />
        <div>
          <p className="title">{titles}</p>
          <div className="star-section">
            <HiStar className="star" />
            <p className="rating">{ratings}</p>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="loc-emp">
          <div className="location-section">
            <IoLocationSharp id="location" className="location-logo" />
            <label htmlFor="location" className="location">
              {locations}
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
      <div className="description-head">
        <h1 className="description-heading">Description</h1>
        <a href={companyWebsiteUrl}>
          Visit <BiLinkExternal className="link-logo" />
        </a>
      </div>
      <p className="description">{jobDescription}</p>
      <div>
        <h1>Skills</h1>
        <ul className="skills-container">
          {skillsList.map(eachSkill => (
            <li className="list-item">
              <img
                src={eachSkill.imageUrl}
                alt={eachSkill.name}
                className="skill-img"
              />
              <p className="skill-name">{eachSkill.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="description-heading">Life at Company</h1>
        <div className="life-at-company-container">
          <p className="description">{updatedLifeAtCompany.description}</p>
          <img src={updatedLifeAtCompany.imageUrl} alt="life at company" />
        </div>
      </div>
      <ul className="similar-jobs-container">
        <SimilarJobs similarJobDetails={similarJobs} />
      </ul>
    </div>
  )
}

export default JobDetailsMatter
