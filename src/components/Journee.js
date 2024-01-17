import React from 'react';
import botolaJournee from '../Botolapro_journee.json';
import logofar from "../image/logo/far.png";
import logoirt from "../image/logo/irt.png";
import logowac from "../image/logo/wac.png";
import logorca from "../image/logo/rca.png";
import logorsb from "../image/logo/rsb.png";
import logomas from "../image/logo/mas.png";
import logohusa from "../image/logo/husa.png";
import logoits from "../image/logo/its.png";
import logoberrechid from "../image/logo/berrechid.png";
import logomat from "../image/logo/mat.png";
import logomco from "../image/logo/mco.png";
import logoock from "../image/logo/ock.png";
import logoocs from "../image/logo/ocs.png";
import logosccm from "../image/logo/sccm.png";
import logozemamra from "../image/logo/zemamra.png";
import logojss from "../image/logo/jss.png";
import logofus from "../image/logo/fus.png";


const logosEquipes = {
    'FAR': logofar,        
    'IRT': logoirt,        
    'WAC': logowac,       
    'RCA': logorca,     
    'RSB': logorsb,   
    'MAS': logomas,       
    'HUSA': logohusa,      
    'UTS': logoits,        
    'CAYB': logoberrechid, 
    'MAT': logomat,       
    'MCO': logomco,       
    'OCK': logoock,        
    'OCS': logoocs,        
    'SCCM': logosccm,     
    'RCAZ': logozemamra,   
    'JSS': logojss,
    'FUS': logofus       
  };

const Journee = () => {
    const formaterDate = (chaineDate) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
      return new Date(chaineDate).toLocaleDateString('fr-FR', options);
    };

    return (
        <div className="conteneur-calendrier">
            <h1 className="header-title">Matchs</h1>
          {botolaJournee.map((match, index) => (
            <div key={index} className="match">
              <div className="date">{formaterDate(match.date)}</div>
              <div className="equipes">
                <img src={logosEquipes[match.accueil]} alt={match.accueil} />
                <span className="nom-equipe">{match.accueil}</span>
              </div>
              <div className="contre">vs</div>
              <div className="equipes">
                <img src={logosEquipes[match.visite]} alt={match.visite} />
                <span className="nom-equipe">{match.visite}</span>
              </div>
              <div className="heure">{match.temps}</div>
            </div>
          ))}
        </div>
      );
    };
    

export default Journee;