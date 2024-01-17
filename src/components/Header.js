import React from "react"
import posterImage from "../image/poster.png";
import logoImage from "../image/logo/botolapro2.png";
import backgroundImage from "../image/back2.png";

export default function Header(props){
    return(
        <div className="poster" style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <div className="titre">
                <img src={logoImage} alt="logo" className="logo2--botola"/>
                <h1>{props.titre}</h1>
            </div>
            <img src={posterImage} alt="logo" className="poster--img"/>
        </div>
    )
}