import {Component} from 'react'
import Cookies from 'js-cookie'
import JobDetailsMatter from '../JobDetailsMatter'

import './index.css'

class JobDetails extends Component {
  state = {
    jobDetails: '',
    similarJobs: '',
    skillsList: [],
    updatedLifeAtCompany: '',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = ` https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const similarJob = data.similar_jobs
    const updatedSimilarJobs = similarJob.map(eachJob => ({
      companyLogoUrl: eachJob.company_logo_url,
      employmentType: eachJob.employment_type,
      id: eachJob.id,
      jobDescription: eachJob.job_description,
      location: eachJob.location,
      rating: eachJob.rating,
      title: eachJob.title,
    }))
    const skill = data.job_details.skills
    const updatedSkills = skill.map(eachSkill => ({
      imageUrl: eachSkill.image_url,
      name: eachSkill.name,
    }))
    const lifeAtCompany = data.job_details.life_at_company
    const updatedLifeAtCompanys = {
      description: lifeAtCompany.description,
      imageUrl: lifeAtCompany.image_url,
    }
    this.setState({
      jobDetails: data.job_details,
      similarJobs: updatedSimilarJobs,
      skillsList: updatedSkills,
      updatedLifeAtCompany: updatedLifeAtCompanys,
    })
  }

  render() {
    const {
      jobDetails,
      similarJobs,
      skillsList,
      updatedLifeAtCompany,
    } = this.state
    return (
      <div className="job-details-container">
        <JobDetailsMatter
          jobDetails={jobDetails}
          skillsList={skillsList}
          updatedLifeAtCompany={updatedLifeAtCompany}
          similarJobs={similarJobs}
        />
      </div>
    )
  }
}

export default JobDetails
