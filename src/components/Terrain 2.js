import React from "react";
import terrain from "../image/terrain.png";
import posMil from "../image/pos-mil.png";
import posGar from "../image/pos-gar.png";
import posAtt from "../image/pos-att.png";
import posDef from "../image/pos-def.png";

const Player = (props) => {
    return (<div className="player">
        <img src={props.img} alt="Player" />
        </div>)
        ;
  };
  
const Terrain = () => {
    return (
      <div className="formation" style={{ backgroundImage: `url(${terrain})` }}>
        {/* Defenders */}
        <Player img={posDef}/>
        <Player img={posDef}/>
        <Player img={posDef}/>
        <Player img={posDef}/>
  
        {/* Midfielders */}
        <Player img={posMil}/>
        <Player img={posMil}/>
        <Player img={posMil}/>
        
  
        {/* Forwards */}
        <Player img={posAtt}/>
        <Player img={posAtt}/>
        <Player img={posAtt}/>

        <Player img={posGar}/>
      </div>
    );
  };
export default Terrain;