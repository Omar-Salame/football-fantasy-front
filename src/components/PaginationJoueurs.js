import React, { useState } from "react";
import Joueurs from "./Joueurs"; // Assuming Joueurs is in the same directory

const PlayersList = ({ players, onPlayerSelect}) => {
  const [currentIndex, setCurrentIndex] = useState({
    Midfielder: 0,
    Defender: 0,
    Goalkeeper: 0,
    Forward: 0,
  });

  // Assuming 'players' is the array of player objects passed as a prop
  const positions = ["Midfielder", "Defender", "Goalkeeper", "Forward"];
  const playersPerPage = 5;

  const handleNext = (position) => {
    setCurrentIndex((prevIndices) => ({
      ...prevIndices,
      [position]: prevIndices[position] + playersPerPage,
    }));
  };

  const handleBack = (position) => {
    setCurrentIndex((prevIndices) => ({
      ...prevIndices,
      [position]: Math.max(prevIndices[position] - playersPerPage, 0),
    }));
  };

  const renderPlayers = (position) => {
    return players
      .filter((player) => player.player_pos === position)
      .slice(currentIndex[position], currentIndex[position] + playersPerPage)
      .map((player, index) => (
        <Joueurs key={index} {...player} onClick={() => onPlayerSelect(player)} />
      ));
  };

  return (
    <div>
      {positions.map((position) => (
        <div key={position}>
          <h2>{position}</h2>
          {renderPlayers(position)}
          <button onClick={() => handleBack(position)} disabled={currentIndex[position] <= 0}>
            Back
          </button>
          <button onClick={() => handleNext(position)} disabled={currentIndex[position] + playersPerPage >= players.filter(player => player.player_pos === position).length}>
            Next
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlayersList;
