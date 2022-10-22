import React, { Component } from 'react'

export default class Degree extends Component {
    constructor (props) {
        super(props)
    }
  render() {
    const {degree, deleteEdu} = this.props;
    return (
        <div>
        <h4>{`${degree.degree} in ${degree.subject}`}</h4>
        <h5>{degree.uni}</h5>
        <h6>{degree.city}</h6>
        <div className="eduDates">
          {`${degree.startDate} to
                      ${degree.endDate}`}
        </div>
        <button onClick = { (e) => deleteEdu(e, degree)}>Delete</button>
      </div>
    )
  }
}
