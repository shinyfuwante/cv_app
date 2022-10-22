import React, { Component } from "react";

export default class Job extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {job, deleteWork} = this.props;
    return (<div>
    <h4>{job.company}</h4>
    <h5>{job.title}</h5>
    <div className="workDates">
      {`${job.startDate} to
                  ${job.endDate}`}
    </div>
    {job.description}
    <button onClick={(e) => deleteWork(e, job)}>Delete</button>
  </div>);
  }
}
