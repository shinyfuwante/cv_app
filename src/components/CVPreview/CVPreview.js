import React, { Component } from "react";
import Degree from "../Degree";
import Job from "../Job";

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
    } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <h6>{phoneNum}</h6>
        <h3>Education</h3>
        {education.map((degree) => {
          return (
            <Degree
              degree={degree}
              key={`${degree.uni} and ${degree.subject} and ${degree.degree}`}
              deleteEdu={deleteEdu}
            />
          );
        })}
        <h3>Work Experience</h3>
        {workExperience.map((job) => {
          return <Job job={job} key={`${job.company} and ${job.title}`} deleteWork = {deleteWork}/>;
        })}
      </>
    );
  }
}
