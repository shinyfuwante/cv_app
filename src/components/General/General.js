import React from "react";
import './General.css'

class General extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {generalChange} = this.props;
        return (
        <div className = 'general-info'>
        <form className = 'general-info-form'>
            <input type="text" name="userName" id="userName" placeholder = "Full Name" onChange = {generalChange}/>
            <input type="email" name="email" id="email" placeholder = "your@email.com" onChange = {generalChange}/>
            <input type="tel" name="phoneNum" id="phoneNum" placeholder = "(111) 222-3333" onChange = {generalChange}/>
        </form>
        </div>)
    }
}

export default General;