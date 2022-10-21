import React from "react";
import "./EduInfo.css";

class EduInfo extends React.Component {
    render() {
        return (<form className = "edu-info">
            <input type="text" name="school" id="school" placeholder = "University Name"/>
            <input type="text" name="schoolCity" id="schoolCity" placeholder = "City"/>
            <input type="text" name="degree" id="degree" placeholder = "Degree"/>
            <input type="text" name="subject" id="subject" placeholder = "Subject"/>
            <div className = "edu-dates">
                <input type="text" name="startEdu" id="startEdu" placeholder = "Start Date"/>
                <input type="text" name="workEdu" id="endEdu" placeholder = "End Date"/>
            </div>
        </form>)
    }
}


export default EduInfo;