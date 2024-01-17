import React from 'react';
import Navbar from '../components/Navbar';
import Equipebar from '../components/Equipebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Classement from '../components/Classement';
import Journee from '../components/Journee';


function Ligue() {
    return (
      <div className="container">
        <Equipebar />
        <Navbar />
        <Header titre="Botola Pro"/>
        <div className="ligue">
          <Classement />
          <Journee />
        </div>
        
        
        <Footer />
      </div>
    );
  }

  export default Ligue;