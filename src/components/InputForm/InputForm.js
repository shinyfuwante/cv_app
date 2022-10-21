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
      currentEdu: {
        uni: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
      },
      workExperience: [],
      currentWork: {
        company: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      },
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
  educationChange = (e) => {
    const info = e.target.value;
    switch (e.target.id) {
      case "school":
        this.setState((state) => {
          state.currentEdu.uni = info;
        });
        break;
      case "schoolCity":
        this.setState((state) => {
          state.currentEdu.city = info;
        });
        break;
      case "degree":
        this.setState((state) => {
            state.currentEdu.degree = info;
          });
          break;
      case "subject":
        this.setState((state) => {
            state.currentEdu.subject = info;
          });
          break;
      case "startEdu":
        this.setState((state) => {
            state.currentEdu.startDate = info;
          });
          break;
      case "endEdu":
        this.setState((state) => {
            state.currentEdu.endDate = info;
          });
          break;
      default:
        return;
    }
  };
  workChange = (e) => {
    const info = e.target.value;
    switch (e.target.id) {
      case "companyName":
        this.setState((state) => {
          state.currentWork.company = info;
        });
        break;
      case "title":
        this.setState((state) => {
          state.currentWork.title = info;
        });
        break;
      case "workDesc":
        this.setState((state) => {
            state.currentWork.description = info;
          });
          break;
      case "startWork":
        this.setState((state) => {
            state.currentWork.startDate = info;
          });
          break;
      case "endWork":
        this.setState((state) => {
            state.currentEdu.endDate = info;
          });
          break;
      default:
        return;
    }
  };
  printState = (e) => {
    console.log(this.state);
  };
  render() {
    const { fullName, email, phoneNum, education, workExperience, currentEdu, currentWork } = this.state;
    return (
      <div className="input-form-wrapper">
        <h3 id="general-header">General Information</h3>
        <General generalChange={this.generalChange}></General>
        <h3 id="education-header">Education</h3>
        <EduInfo eduChange={this.educationChange}></EduInfo>
        <h3 id="work-header">Work History</h3>
        <WorkInfo workChange = {this.workChange}></WorkInfo>
        <button onClick={this.printState}>state</button>
      </div>
    );
  }
}

export default InputForm;
