import React, { Component } from "react";
import Degree from "../Degree";
import Job from "../Job";
import "./CVPreview.css";

export default class CVPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name,
      email,
      phoneNum,
      education,
      workExperience,
      deleteEdu,
      deleteWork,
      editEdu,
      finishEditEdu,
      eduChange,
      editWork,
      finishEditWork,
      workChange,
    } = this.props;
    return (
      <>
        <div className="cv-preview-header">
          <h2 className="cv-preview-name">{name}</h2>
          <div className="contact-info">
            <h6>{email}</h6>
            <h6>{phoneNum}</h6>
          </div>
        </div>
        <div className="cv-preview-work">
          <h3>Work Experience</h3>
          {workExperience.map((job) => {
            return (
              <Job
                job={job}
                key={`${job.company} and ${job.title}`}
                deleteWork={deleteWork}
                editWork={editWork}
                finishEditWork={finishEditWork}
                workChange={workChange}
              />
            );
          })}
        </div>
        <div className="cv-preview-edu">
          <h3>Education</h3>
          {education.map((degree) => {
            return (
              <Degree
                degreeAcq={degree}
                key={`${degree.uni} and ${degree.subject} and ${degree.degree}`}
                deleteEdu={deleteEdu}
                editEdu={editEdu}
                finishEditEdu={finishEditEdu}
                eduChange={eduChange}
              />
            );
          })}
        </div>
      </>
    );
  }
}
