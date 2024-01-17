import React from "react";

export default function Carte(props){
    return(
        <div className="carte">
            <img src={props.img} alt="carte " className="carte--img"/>
            <div className="carte--texte">
                <h2>{props.titre}</h2>
                <p>{props.texte}</p>
            </div>
        </div>
  );
}