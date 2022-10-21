import React from "react";
import "./WorkInfo.css";

class WorkInfo extends React.Component {
    render() {
        return (<form className = "work-info">
            <input type="text" name="companyName" id="companyName" placeholder = "Company Name"/>
            <input type="text" name="title" id="title" placeholder = "Title/Position"/>
            <textarea name="workDesc" id="workDesc" cols="30" rows="1" placeholder="Description of Responsibilities"></textarea>
            <div className="work-dates">
                <input type="text" name="startWork" id="startWork" placeholder = "Start Date"/>
                <input type="text" name="endWork" id="endWork" placeholder="End Date" />
            </div>
        </form>)
    }
}

export default WorkInfo;