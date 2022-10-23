import React, { Component } from "react";

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
        <>
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
            name="startDate"
            id="startDate"
            defaultValue={job.startDate}
            onChange={workChange}
          />
          <input
            type="text"
            name="endDate"
            id="endDate"
            defaultValue={job.endDate}
            onChange={workChange}
          />
          <textarea
            name="workDesc"
            id="workDesc"
            defaultValue={job.description}
            onChange={workChange}
          ></textarea>
        </>
      );
    } else {
      button = <button onClick={(e) => editWork(e, job)}>Edit</button>;
      component = (
        <>
          <div>
            <h4>{job.company}</h4>
            <h5>{job.title}</h5>
            <div className="workDates">
              {`${job.startDate} to
                          ${job.endDate}`}
            </div>
            {job.description}
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
