import React from "react";
import "./WorkInfo.css";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { workChange } = this.props;
    return (
      <form className="work-info">
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
      </form>
    );
  }
}

export default WorkInfo;
