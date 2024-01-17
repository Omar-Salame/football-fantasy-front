import React from "react";

export default function Joueurs(props){
    function selectPlayer() {
        if (props.onClick) {
            props.onClick(props);
        }
    }
    return(
        <div className="card" onClick={selectPlayer}>
            {/*<img src={`./image/maillot/${props.player_club}.png`} alt="maillot" className="card--img"/>*/}
            <h3><span className="pos">{props.player_pos}</span> <span className="nom"><span className="bold">|</span>{props.player_name}</span>
            </h3>
        </div>      
    )
}