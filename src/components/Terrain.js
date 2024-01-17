import React from "react";
import terrain from "../image/terrain.png";
import Joueurs from './Joueurs';
import posMil from "../image/pos-mil.png";

  
const Terrain = ({ selectedTeam }) => {
  const renderPlayers = (positionKey) => {
    if (selectedTeam[positionKey].length === 0) {
      return <img src={posMil} alt="No player selected" className="player" />;
    } else {
      return selectedTeam[positionKey].map((playerName, index) => (
        <Joueurs 
        key={index}
        player_name={playerName}
        player_pos={positionKey}
        />
        ));
      }
    
    };

    return (
      <div className="formation" style={{ backgroundImage: `url(${terrain})` }}>
        {/* Defenders */}
        <div className="defenders">{renderPlayers('Defender')}</div>
        <div className="defenders">{renderPlayers('Defender')}</div>
        <div className="defenders">{renderPlayers('Defender')}</div>
        <div className="defenders">{renderPlayers('Defender')}</div>
  
        {/* Midfielders */}
        <div className="midfielders">{renderPlayers('Midfielder')}</div>
        <div className="midfielders">{renderPlayers('Midfielder')}</div>
        <div className="midfielders">{renderPlayers('Midfielder')}</div>
        
  
        {/* Forwards */}
        <div className="forwards">{renderPlayers('Forward')}</div>
        <div className="forwards">{renderPlayers('Forward')}</div>
        <div className="forwards">{renderPlayers('Forward')}</div>

        <div className="goalkeepers">{renderPlayers('Goalkeeper')}</div>
      </div>
    );
  };
export default Terrain;