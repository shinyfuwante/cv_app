import React, { Component } from "react";

export default class CVPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, email, phoneNum, education, workExperience} = this.props;
    return (
      <>
        <h3>{name}</h3>
        <h5>{email}</h5>
      </>
    );
  }
}
