import React , { useState } from 'react';
import Navbar from '../components/Navbar';
import Equipebar from '../components/Equipebar';
import Carte from '../components/Carte';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Terrain from '../components/Terrain';
import Pagination from '../components/PaginationJoueurs';
import intro1 from "../image/intro.png";
import intro2 from "../image/intro2.png";
import listeJoueurs from  "../Botolapro_players.json"


function Index() {
  const [team, setTeam] = useState({
    Midfielder: [],
    Defender: [],
    Goalkeeper: [],
    Forward: []
  });

  const selectPlayer = (player) => {
    setTeam(previousTeam => {
      const updatedTeam = { ...previousTeam };
      const maxPlayers = {
        Midfielder: 3,
        Defender: 4,
        Goalkeeper: 1,
        Forward: 3
      };
      const currentPlayers = updatedTeam[player.player_pos];
      if (currentPlayers.includes(player.player_name)) {
        updatedTeam[player.player_pos] = currentPlayers.filter(name => name !== player.player_name).concat(player.player_name);
      } else if (currentPlayers.length < maxPlayers[player.player_pos]) {
        updatedTeam[player.player_pos].push(player.player_name);
      } else {
        updatedTeam[player.player_pos] = currentPlayers.slice(1).concat(player.player_name);
      }

      return updatedTeam;
    });
  };

        
    return (
      <div className="container">
        <Equipebar />
        <Navbar />
        <Header titre='Fantasy Football'/>
        <div className='intro'>
          <Carte 
            img= {intro1}
            titre="Choisis Ton Equipe"
            texte= "Utilisez votre budget de 100 millions d'euro pour constituer une équipe de 11 joueurs de la Botola Pro."    
          />
          <Carte 
            img= {intro2} 
            titre= "Rejoignez des ligues"
            texte= "Jouez contre vos amis, votre famille, vos collègues ou une communauté en ligne dans des ligues et des coupes sur invitation."     
          />
        </div>
        <div className='equipe'>
          <div className="players-section">
            <Pagination players={listeJoueurs} onPlayerSelect={selectPlayer}/>
          </div>
          <Terrain selectedTeam={team}/>

        </div>
        

        <Footer />
      </div>
    );
  }

  export default Index;