import React from "react";
import phoneImage from "../images/phone.png";
import mailImage from "../images/mail.png";

export default function Contact(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.img} alt="cat" className="card--img"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneImage} alt="phone" className="icon--img"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailImage} alt="mail" className="icon--img"/>
                <p>{props.mail}</p>
            </div>
        </div>        
    )
}