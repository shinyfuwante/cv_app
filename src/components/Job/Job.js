import React, { Component } from "react";
import "./Job.css";

export default class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let button;
    let component;
    const { job, deleteWork, editWork, finishEditWork, workChange } =
      this.props;
    if (job.isEditing) {
      button = <button onClick={(e) => finishEditWork(e, job)}>Submit</button>;
      console.log("oh");
      component = (
        <div className="edit-job">
          <input
            type="text"
            name="companyName"
            id="companyName"
            defaultValue={job.company}
            onChange={workChange}
          />
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={job.title}
            onChange={workChange}
          />
          <input
            type="text"
            name="startWork"
            id="startWork"
            defaultValue={job.startDate}
            onChange={workChange}
          />
          <input
            type="text"
            name="endWork"
            id="endWork"
            defaultValue={job.endDate}
            onChange={workChange}
          />
          <textarea
            name="workDesc"
            id="workDesc"
            defaultValue={job.description}
            onChange={workChange}
          ></textarea>
        </div>
      );
    } else {
      button = <button onClick={(e) => editWork(e, job)}>Edit</button>;
      component = (
        <>
          <div className="preview-job">
            <div className="jobInfo">
              <h4>{job.title}</h4>
              <h5>{job.company}</h5>
              {job.description}
            </div>
            <div className="workDates">
              {`${job.startDate} to
                          ${job.endDate}`}
            </div>
          </div>
        </>
      );
    }
    return (
      <div>
        {component}
        {button}
        <button onClick={(e) => deleteWork(e, job)}>Delete</button>
      </div>
    );
  }
}
