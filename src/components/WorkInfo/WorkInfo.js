import React from "react";
import "./WorkInfo.css";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { workChange, addWork, workID} = this.props;
    return (
      <form className="work-info" key = {workID}>
        <input
          onChange = {workChange}
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
        />
        <input
          onChange = {workChange}
          type="text"
          name="title"
          id="title"
          placeholder="Title/Position"
        />
        <textarea
          onChange = {workChange}
          name="workDesc"
          id="workDesc"
          cols="30"
          rows="1"
          placeholder="Description of Responsibilities"
        ></textarea>
        <div className="work-dates">
          <input
            onChange = {workChange}
            type="text"
            name="startWork"
            id="startWork"
            placeholder="Start Date"
          />
          <input
            onChange = {workChange}
            type="text"
            name="endWork"
            id="endWork"
            placeholder="End Date"
          />
        </div>
        <button onClick={(e)=> addWork(e)}>Add</button>
      </form>
    );
  }
}

export default WorkInfo;
