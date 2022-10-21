import React from "react";
import './General.css'

class General extends React.Component {
    render() {
        return (
        <div className = 'general-info'>
        <form className = 'general-info-form'>
            <input type="text" name="userName" id="userName" placeholder = "Full Name"/>
            <input type="email" name="email" id="email" placeholder = "your@email.com"/>
            <input type="tel" name="phoneNum" id="phoneNum" placeholder = "(111) 222-3333"/>
        </form>
        </div>)
    }
}

export default General;