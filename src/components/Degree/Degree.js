import React, { Component } from "react";
import "./Degree.css";
export default class Degree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { degreeAcq, deleteEdu, editEdu, finishEditEdu, eduChange } =
      this.props;
    const { degree, subject, uni, city, startDate, endDate } = degreeAcq;
    let button;
    let component;
    if (degreeAcq.isEditing) {
      button = (
        <button onClick={(e) => finishEditEdu(e, degreeAcq)}>Submit</button>
      );
      component = (
        <>
          <input
            type="text"
            name="degree"
            id="degree"
            defaultValue={degree}
            onChange={eduChange}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            defaultValue={subject}
            onChange={eduChange}
          />
          <input
            type="text"
            name="uni"
            id="uni"
            defaultValue={uni}
            onChange={eduChange}
          />
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={city}
            onChange={eduChange}
          />
          <input
            type="text"
            name="startDate"
            id="startDate"
            defaultValue={startDate}
            onChange={eduChange}
          />
          <input
            type="text"
            name="endDate"
            id="endDate"
            defaultValue={endDate}
            onChange={eduChange}
          />
        </>
      );
    } else {
      button = <button onClick={(e) => editEdu(e, degreeAcq)}>Edit</button>;
      component = (
        <div className="previewEdu">
          <div className="degreeInfo">
            <h4>{`${degreeAcq.degree} in ${degreeAcq.subject}`}</h4>
            <h5>{degreeAcq.uni}</h5>
            <h6>{degreeAcq.city}</h6>
          </div>
          <div className="eduDates">
            {`${degreeAcq.startDate} to
                      ${degreeAcq.endDate}`}
          </div>
        </div>
      );
    }
    return (
      <div>
        {component}
        {button}
        <button onClick={(e) => deleteEdu(e, degreeAcq)}>Delete</button>
      </div>
    );
  }
}
