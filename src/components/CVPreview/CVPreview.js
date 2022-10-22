import React, { Component } from "react";

export default class CVPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, phoneNum, education, workExperience } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <h6>{phoneNum}</h6>
        <h3>Education</h3>
        {education.map((degree) => {
          return (
            <div
              key={`${degree.uni} and ${degree.subject} and ${degree.degree}`}
            >
              <h4>{`${degree.degree} in ${degree.subject}`}</h4>
              <h5>{degree.uni}</h5>
              <h6>{degree.city}</h6>
              <div className="eduDates">
                {`${degree.startDate} to
                            ${degree.endDate}`}
              </div>
            </div>
          );
        })}
        <h3>Work Experience</h3>
        {workExperience.map((job) => {
          return (
            <div key={`${job.company} and ${job.title}`}>
              <h4>{job.company}</h4>
              <h5>{job.title}</h5>
              <div className="workDates">
                {`${job.startDate} to
                            ${job.endDate}`}
              </div>
              {job.description}
            </div>
          );
        })}
      </>
    );
  }
}
