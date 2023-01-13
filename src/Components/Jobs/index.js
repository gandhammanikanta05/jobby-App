import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import Profile from '../Profile'
import JobCard from '../JobCard'
import './index.css'

import JobDetails from '../JobDetails'

class Jobs extends Component {
  state = {
    jobsList: [],
    minimumPackage: '',
    inputValue: '',
    searchValue: '',
    employmentType: [],
  }

  componentDidMount = () => {
    this.getJobsList()
  }

  getJobsList = async () => {
    const {employmentType, minimumPackage, inputValue} = this.state
    const newEmployment = employmentType.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?employment_type=${newEmployment}&minimum_package=${minimumPackage}&search=${inputValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(eachone => ({
        companyLogoUrl: eachone.company_logo_url,
        employmentType: eachone.employment_type,
        id: eachone.id,
        jobDescription: eachone.job_description,
        location: eachone.location,
        packagePerAnnum: eachone.package_per_annum,
        rating: eachone.rating,
        title: eachone.title,
      }))
      this.setState({jobsList: updatedData})
    }
  }

  onchangeCheckbox = event => {
    const newCheck = event.target.value
    this.setState(
      prevState => ({
        employmentType: [...prevState.employmentType, newCheck],
      }),
      this.getJobsList,
    )
  }

  onChangeRadio = event => {
    this.setState({minimumPackage: event.target.value}, this.getJobsList)
  }

  onclickSearch = event => {
    const {searchValue} = this.state
    event.preventDefault()
    this.setState({inputValue: searchValue}, this.getJobsList)
  }

  onchangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  /* gotoJobDetails = async id => {
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
    return <JobDetails key={id} details={data} />
  } */

  renderJoblist = () => {
    const {jobsList} = this.state
    return (
      <ul className="unorder-list">
        {jobsList.map(eachJob => (
          <JobCard
            key={eachJob.id}
            jobDetails={eachJob}
            gotoJobDetails={this.gotoJobDetails}
          />
        ))}
      </ul>
    )
  }

  renderNojobs = () => (
    <div className="no-jobs-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
      />
      <h1 className="heading">No Jobs Found</h1>
      <p className="label">We could not found any jobs. Try other filters</p>
    </div>
  )

  render() {
    const {jobsList} = this.state
    const len = jobsList.length
    const renderJobsSection =
      len > 0 ? this.renderJoblist() : this.renderNojobs()
    return (
      <div className="jobs-container">
        <Header newprops={this.props} />
        <div className="bottom-container">
          <div className="left-section">
            <Profile />
            <div>
              <h1 className="heading">Type of Employment</h1>
              <div className="checkbox-options">
                <input
                  type="checkbox"
                  id="fulltime"
                  value="FULLTIME"
                  onChange={this.onchangeCheckbox}
                />
                <label htmlFor="fulltime" className="label">
                  Full Time
                </label>
              </div>
              <div className="checkbox-options">
                <input
                  type="checkbox"
                  id="partTime"
                  value="PARTTIME"
                  onChange={this.onchangeCheckbox}
                />
                <label htmlFor="partTime" className="label">
                  Part Time
                </label>
              </div>
              <div className="checkbox-options">
                <input
                  type="checkbox"
                  id="freelance"
                  value="FREELANCE"
                  onChange={this.onchangeCheckbox}
                />
                <label htmlFor="freelance" className="label">
                  Freelance
                </label>
              </div>
              <div className="checkbox-options">
                <input
                  type="checkbox"
                  id="internship"
                  value="INTERNSHIP"
                  onChange={this.onchangeCheckbox}
                />
                <label htmlFor="internship" className="label">
                  Internship
                </label>
              </div>
            </div>
            <div>
              <h1 className="heading">Salary Range</h1>
              <div className="radio-options">
                <input
                  type="radio"
                  id="10lpa"
                  name="salaryRange"
                  value="1000000"
                  onChange={this.onChangeRadio}
                />
                <label htmlFor="10lpa" className="label">
                  10 LPA and above
                </label>
              </div>
              <div className="radio-options">
                <input
                  type="radio"
                  id="20lpa"
                  name="salaryRange"
                  value="2000000"
                  onChange={this.onChangeRadio}
                />
                <label htmlFor="20lpa" className="label">
                  20 LPA and above
                </label>
              </div>
              <div className="radio-options">
                <input
                  type="radio"
                  id="30lpa"
                  name="salaryRange"
                  value="3000000"
                  onChange={this.onChangeRadio}
                />
                <label htmlFor="30lpa" className="label">
                  30 LPA and above
                </label>
              </div>
              <div className="radio-options">
                <input
                  type="radio"
                  id="40lpa"
                  name="salaryRange"
                  value="4000000"
                  onChange={this.onChangeRadio}
                />
                <label htmlFor="40lpa" className="label">
                  40 LPA and above
                </label>
              </div>
            </div>
          </div>
          <div className="right-section">
            <form className="search-section" onSubmit={this.onclickSearch}>
              <input
                type="search"
                placeholder="Search"
                className="input"
                onChange={this.onchangeSearch}
              />
              <button type="submit" data-testid="searchButton">
                <BsSearch className="search-icon" />
              </button>
            </form>
            {renderJobsSection}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
