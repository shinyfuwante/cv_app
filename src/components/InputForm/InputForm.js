import React from "react";
import "./InputForm.css";
import General from "../General";
import EduInfo from "../EduInfo";
import WorkInfo from "../WorkInfo";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Full Name",
      email: "your@email.com",
      phoneNum: "(111) 222-3333",
      education: [],
      workExperience: [],
    };
  }
  generalChange = (e) => {
    switch (e.target.id) {
      case "userName":
        this.setState({
          fullName: e.target.value,
        });
        break;
      case "email":
        this.setState({
          email: e.target.value,
        });
        break;
      case "phoneNum":
        this.setState({
          phoneNum: e.target.value,
        });
        break;
      default:
        return;
    }
  };
  printState = (e) => {
    console.log(this.state);
  }
  render() {
    const { fullName, email, phoneNum, education, workExperience } = this.state;
    return (
      <div className="input-form-wrapper">
        <h3 id="general-header">General Information</h3>
        <General generalChange={this.generalChange}></General>
        <h3 id="education-header">Education</h3>
        <EduInfo></EduInfo>
        <h3 id="work-header">Work History</h3>
        <WorkInfo></WorkInfo>
        <button onClick = {this.printState}>state</button>
      </div>
    );
  }
}

export default InputForm;
