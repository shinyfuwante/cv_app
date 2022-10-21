import React from "react";
import "./EduInfo.css";

class EduInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { eduChange } = this.props;
    return (
      <form className="edu-info">
        <input
          onChange={eduChange}
          type="text"
          name="school"
          id="school"
          placeholder="University Name"
        />
        <input
          onChange={eduChange}
          type="text"
          name="schoolCity"
          id="schoolCity"
          placeholder="City"
        />
        <input
          onChange={eduChange}
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree"
        />
        <input
          onChange={eduChange}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <div className="edu-dates">
          <input
            onChange={eduChange}
            type="text"
            name="startEdu"
            id="startEdu"
            placeholder="Start Date"
          />
          <input
            onChange={eduChange}
            type="text"
            name="workEdu"
            id="endEdu"
            placeholder="End Date"
          />
        </div>
      </form>
    );
  }
}

export default EduInfo;
