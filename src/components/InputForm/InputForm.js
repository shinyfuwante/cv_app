import React from "react";
import "./InputForm.css";
import General from "../General";
import EduInfo from "../EduInfo";
import WorkInfo from "../WorkInfo";
import CVPreview from "../CVPreview";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Tony Pepperoni",
      email: "pizzabronytony@email.com",
      phoneNum: "(111) 222-3333",
      education: [],
      currentEdu: {
        uni: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        isEditing: false,
      },
      eduID: new Date(),
      workExperience: [],
      currentWork: {
        company: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        isEditing: false,
      },
      workID: new Date(),
      showPreview: false,
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
          state.currentWork.endDate = info;
        });
        break;
      default:
        return;
    }
  };
  addWork = (e) => {
    e.preventDefault();
    if (JSON.stringify(this.state.currentWork) === "{}") return;
    console.log(this.state.currentWork);
    this.setState({
      workExperience: this.state.workExperience.concat(this.state.currentWork),
      currentWork: {},
      workID: new Date(),
    });
  };
  deleteWork = (e, jobToDelete) => {
    e.preventDefault();
    this.setState({
        workExperience:this.state.workExperience.filter((job) => job !== jobToDelete)
    })
  }
  addEdu = (e) => {
    e.preventDefault();
    if (JSON.stringify(this.state.currentEdu) === "{}") return;
    console.log(this.state.currentEdu);
    this.setState({
      education: this.state.education.concat(this.state.currentEdu),
      currentEdu: {},
      eduID: new Date(),
    });
  };
  editEdu = (e, degreeToEdit) => {
    e.preventDefault();
    degreeToEdit.isEditing = !degreeToEdit.isEditing;
    this.setState({
        currEdu: {degreeToEdit}
    })
  }
  finishEditEdu = (e, degreeToEdit) => {
    e.preventDefault();
    degreeToEdit.isEditing = !degreeToEdit.isEditing;
    const newEduArray = [...this.state.education];
    const newEdu = degreeToEdit;
    newEduArray[newEduArray.indexOf(degreeToEdit)] = newEdu;
    this.setState({
        education: newEduArray
    })
  }
  deleteEdu = (e, degreeToDelete) => {
    e.preventDefault();
    this.setState({
        education:this.state.education.filter((degree) => degree !== degreeToDelete)
    })
  }
  printState = (e) => {
    console.log(this.state);
  };
  clickPreview = () => {
    this.setState({
      showPreview: true,
    });
  };
  render() {
    const {
      fullName,
      email,
      phoneNum,
      education,
      workExperience,
      currentEdu,
      currentWork,
      showPreview,
      eduID,
      workID,
    } = this.state;
    return (
      <div className="input-form-wrapper">
        <h3 id="general-header">General Information</h3>
        <General generalChange={this.generalChange}></General>
        <h3 id="education-header">Education</h3>
        <EduInfo
          eduChange={this.educationChange}
          addEdu={this.addEdu}
          currEdu={currentEdu}
          eduID={eduID}
        ></EduInfo>
        <h3 id="work-header">Work History</h3>
        <WorkInfo
          addWork={this.addWork}
          workChange={this.workChange}
          workID={workID}
        />
        <button onClick={this.printState}>state</button>
        <button onClick={this.clickPreview}>Preview CV</button>
        {this.state.showPreview && (
          <CVPreview
            name={fullName}
            email={email}
            phoneNum={phoneNum}
            education={education}
            workExperience={workExperience}
            editEdu = {this.editEdu}
            finishEditEdu = {this.finishEditEdu}
            deleteEdu = {this.deleteEdu}
            deleteWork = {this.deleteWork}
          ></CVPreview>
        )}
      </div>
    );
  }
}

export default InputForm;
